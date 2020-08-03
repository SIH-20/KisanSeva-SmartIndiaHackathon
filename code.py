import cv2
import numpy as np
from matplotlib import pyplot as plt

def get_classificaton(ratio):
	ratio =round(ratio,1)
	toret=""
	if(ratio>=3):
		toret="Classic"
	elif(ratio>=2.1 and ratio<3):
		toret="Elite"
	elif(ratio>=1.1 and ratio<2.1):
		toret="Premimium"
	elif(ratio<=1):
		toret="Classic"
	# toret="("+toret+")"
	return toret
#rnjn
print("Starting")
img = cv2.imread('/home/chirag/Videos/rice-quality-analysis/rice.png',0)#load in greyscale mode
font = cv2.FONT_HERSHEY_SIMPLEX
h, w = img.shape
#convert into binary
ret,binary = cv2.threshold(img,160,255,cv2.THRESH_BINARY)# 160 - threshold, 255 - value to assign, THRESH_BINARY_INV - Inverse binary

#averaging filter
kernel = np.ones((5,5),np.float32)/9
dst = cv2.filter2D(binary,-1,kernel)# -1 : depth of the destination image


kernel2 = cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(3,3))

#erosion
erosion = cv2.erode(dst,kernel2,iterations = 1)

#dilation 
dilation = cv2.dilate(erosion,kernel2,iterations = 1)

#edge detection
edges = cv2.Canny(dilation,100,200)

### Size detection
_,contours,hierarchy = cv2.findContours(erosion, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
# print "No. of rice grains=",len(contours)
total_ar=0
img = cv2.imread('/home/chirag/Videos/rice-quality-analysis/rice.png')
for cnt in contours:
	x,y,w,h = cv2.boundingRect(cnt)
	aspect_ratio = float(w)/h
	if(aspect_ratio<1):
		aspect_ratio=1/aspect_ratio
	# print(round(aspect_ratio,2),get_classificaton(aspect_ratio))
	total_ar+=aspect_ratio
	approx = cv2.approxPolyDP(cnt, 0.009 * cv2.arcLength(cnt, True), True)
	quality = get_classificaton(aspect_ratio)
	# print(quality)
	if quality == "Classic":
		# print(quality)
		cv2.drawContours(img, [approx], 0, (0, 0,255), 5) 
	if quality == "Elite":
		cv2.drawContours(img, [approx], 0, (255, 255,0), 5) 
	if quality == "Premimium":
		cv2.drawContours(img, [approx], 0, (0, 255,0), 5) 
avg_ar=total_ar/len(contours)
quality = get_classificaton(avg_ar)
cv2.putText(img, text= quality, org=(50,50), fontScale=1, fontFace=font, color=(0, 215, 255), thickness=2, lineType=cv2.LINE_AA)
cv2.imwrite("result.png", img)
cv2.imshow("result",img)
cv2.waitKey(0)

cv2.destroyAllWindows()
print ("Average Aspect Ratio=",round(avg_ar,2),get_classificaton(avg_ar))

# for cnt in contours : 
  
#     approx = cv2.approxPolyDP(cnt, 0.009 * cv2.arcLength(cnt, True), True) 
  
#     # draws boundary of contours. 
#     cv2.drawContours(img2, [approx], 0, (0, 0, 255), 5) 


imgs_row=2
imgs_col=3
plt.subplot(imgs_row,imgs_col,1),plt.imshow(img,'gray')
plt.title("Original image")

plt.subplot(imgs_row,imgs_col,2),plt.imshow(binary,'gray')
plt.title("Binary image")

plt.subplot(imgs_row,imgs_col,3),plt.imshow(dst,'gray')
plt.title("Filtered image")

plt.subplot(imgs_row,imgs_col,4),plt.imshow(erosion,'gray')
plt.title("Eroded image")

plt.subplot(imgs_row,imgs_col,5),plt.imshow(dilation,'gray')
plt.title("Dialated image")

plt.subplot(imgs_row,imgs_col,6),plt.imshow(edges,'gray')
plt.title("Edge detect")

plt.show()

