var cube=document.querySelector(".cube"),radioGroup=document.querySelector(".radio-group"),currentClass="";function changeSide(){var e="show-"+radioGroup.querySelector(":checked").value;currentClass&&cube.classList.remove(currentClass),cube.classList.add(e),currentClass=e}changeSide(),radioGroup.addEventListener("change",changeSide);