!function(t,e,a){"undefined"!=typeof module&&module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):e.h337=a()}(0,this,(function(){var t,e={defaultRadius:40,defaultRenderer:"canvas2d",defaultGradient:{.25:"rgb(0,0,255)",.55:"rgb(0,255,0)",.85:"yellow",1:"rgb(255,0,0)"},defaultMaxOpacity:1,defaultMinOpacity:0,defaultBlur:.85,defaultXField:"x",defaultYField:"y",defaultValueField:"value",plugins:{}},a=function(){var t=function(t){this._coordinator={},this._data=[],this._radi=[],this._min=10,this._max=1,this._xField=t.xField||t.defaultXField,this._yField=t.yField||t.defaultYField,this._valueField=t.valueField||t.defaultValueField,t.radius&&(this._cfgRadius=t.radius)},a=e.defaultRadius;return t.prototype={_organiseData:function(t,e){var i=t[this._xField],n=t[this._yField],r=this._radi,s=this._data,h=this._max,o=this._min,d=t[this._valueField]||1,u=t.radius||this._cfgRadius||a;s[i]||(s[i]=[],r[i]=[]),s[i][n]?s[i][n]+=d:(s[i][n]=d,r[i][n]=u);var l=s[i][n];return l>h?(e?this.setDataMax(l):this._max=l,!1):l<o?(e?this.setDataMin(l):this._min=l,!1):{x:i,y:n,value:d,radius:u,min:o,max:h}},_unOrganizeData:function(){var t=[],e=this._data,a=this._radi;for(var i in e)for(var n in e[i])t.push({x:i,y:n,radius:a[i][n],value:e[i][n]});return{min:this._min,max:this._max,data:t}},_onExtremaChange:function(){this._coordinator.emit("extremachange",{min:this._min,max:this._max})},addData:function(){if(arguments[0].length>0)for(var t=arguments[0],e=t.length;e--;)this.addData.call(this,t[e]);else{var a=this._organiseData(arguments[0],!0);a&&(0===this._data.length&&(this._min=this._max=a.value),this._coordinator.emit("renderpartial",{min:this._min,max:this._max,data:[a]}))}return this},setData:function(t){var e=t.data,a=e.length;this._data=[],this._radi=[];for(var i=0;i<a;i++)this._organiseData(e[i],!1);return this._max=t.max,this._min=t.min||0,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},removeData:function(){},setDataMax:function(t){return this._max=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setDataMin:function(t){return this._min=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setCoordinator:function(t){this._coordinator=t},_getInternalData:function(){return{max:this._max,min:this._min,data:this._data,radi:this._radi}},getData:function(){return this._unOrganizeData()}},t}(),i=function(){var t=function(t){var e=t.gradient||t.defaultGradient,a=document.createElement("canvas"),i=a.getContext("2d");a.width=256,a.height=1;var n=i.createLinearGradient(0,0,256,1);for(var r in e)n.addColorStop(r,e[r]);return i.fillStyle=n,i.fillRect(0,0,256,1),i.getImageData(0,0,256,1).data},e=function(t,e){var a=document.createElement("canvas"),i=a.getContext("2d"),n=t,r=t;if(a.width=a.height=2*t,1==e)i.beginPath(),i.arc(n,r,t,0,2*Math.PI,!1),i.fillStyle="rgba(0,0,0,1)",i.fill();else{var s=i.createRadialGradient(n,r,t*e,n,r,t);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,2*t,2*t)}return a};function a(e){var a=e.container,i=this.shadowCanvas=document.createElement("canvas"),n=this.canvas=e.canvas||document.createElement("canvas"),r=(this._renderBoundaries=[1e4,1e4,0,0],getComputedStyle(e.container)||{});n.className="heatmap-canvas",this._width=n.width=i.width=e.width||+r.width.replace(/px/,""),this._height=n.height=i.height=e.height||+r.height.replace(/px/,""),this.shadowCtx=i.getContext("2d"),this.ctx=n.getContext("2d"),n.style.cssText=i.style.cssText="position:absolute;left:0;top:0;",a.style.position="relative",a.appendChild(n),this._palette=t(e),this._templates={},this._setStyles(e)}return a.prototype={renderPartial:function(t){t.data.length>0&&(this._drawAlpha(t),this._colorize())},renderAll:function(t){this._clear(),t.data.length>0&&(this._drawAlpha(function(t){for(var e=[],a=t.min,i=t.max,n=t.radi,r=(t=t.data,Object.keys(t)),s=r.length;s--;)for(var h=r[s],o=Object.keys(t[h]),d=o.length;d--;){var u=o[d],l=t[h][u],_=n[h][u];e.push({x:h,y:u,value:l,radius:_})}return{min:a,max:i,data:e}}(t)),this._colorize())},_updateGradient:function(e){this._palette=t(e)},updateConfig:function(t){t.gradient&&this._updateGradient(t),this._setStyles(t)},setDimensions:function(t,e){this._width=t,this._height=e,this.canvas.width=this.shadowCanvas.width=t,this.canvas.height=this.shadowCanvas.height=e},_clear:function(){this.shadowCtx.clearRect(0,0,this._width,this._height),this.ctx.clearRect(0,0,this._width,this._height)},_setStyles:function(t){this._blur=0==t.blur?0:t.blur||t.defaultBlur,t.backgroundColor&&(this.canvas.style.backgroundColor=t.backgroundColor),this._width=this.canvas.width=this.shadowCanvas.width=t.width||this._width,this._height=this.canvas.height=this.shadowCanvas.height=t.height||this._height,this._opacity=255*(t.opacity||0),this._maxOpacity=255*(t.maxOpacity||t.defaultMaxOpacity),this._minOpacity=255*(t.minOpacity||t.defaultMinOpacity),this._useGradientOpacity=!!t.useGradientOpacity},_drawAlpha:function(t){for(var a=this._min=t.min,i=this._max=t.max,n=(t=t.data||[]).length,r=1-this._blur;n--;){var s,h=t[n],o=h.x,d=h.y,u=h.radius,l=Math.min(h.value,i),_=o-u,c=d-u,f=this.shadowCtx;this._templates[u]?s=this._templates[u]:this._templates[u]=s=e(u,r);var g=(l-a)/(i-a);f.globalAlpha=g<.01?.01:g,f.drawImage(s,_,c),_<this._renderBoundaries[0]&&(this._renderBoundaries[0]=_),c<this._renderBoundaries[1]&&(this._renderBoundaries[1]=c),_+2*u>this._renderBoundaries[2]&&(this._renderBoundaries[2]=_+2*u),c+2*u>this._renderBoundaries[3]&&(this._renderBoundaries[3]=c+2*u)}},_colorize:function(){var t=this._renderBoundaries[0],e=this._renderBoundaries[1],a=this._renderBoundaries[2]-t,i=this._renderBoundaries[3]-e,n=this._width,r=this._height,s=this._opacity,h=this._maxOpacity,o=this._minOpacity,d=this._useGradientOpacity;t<0&&(t=0),e<0&&(e=0),t+a>n&&(a=n-t),e+i>r&&(i=r-e);for(var u=this.shadowCtx.getImageData(t,e,a,i),l=u.data,_=l.length,c=this._palette,f=3;f<_;f+=4){var g,m=l[f],p=4*m;p&&(g=s>0?s:m<h?m<o?o:m:h,l[f-3]=c[p],l[f-2]=c[p+1],l[f-1]=c[p+2],l[f]=d?c[p+3]:g)}u.data=l,this.ctx.putImageData(u,t,e),this._renderBoundaries=[1e3,1e3,0,0]},getValueAt:function(t){var e=this.shadowCtx.getImageData(t.x,t.y,1,1).data[3],a=this._max,i=this._min;return Math.abs(a-i)*(e/255)>>0},getDataURL:function(){return this.canvas.toDataURL()}},a}(),n=(t=!1,"canvas2d"===e.defaultRenderer&&(t=i),t),r=function(){for(var t={},e=arguments.length,a=0;a<e;a++){var i=arguments[a];for(var n in i)t[n]=i[n]}return t},s=function(){var t=function(){function t(){this.cStore={}}return t.prototype={on:function(t,e,a){var i=this.cStore;i[t]||(i[t]=[]),i[t].push((function(t){return e.call(a,t)}))},emit:function(t,e){var a=this.cStore;if(a[t])for(var i=a[t].length,n=0;n<i;n++)(0,a[t][n])(e)}},t}(),i=function(t){var e=t._renderer,a=t._coordinator,i=t._store;a.on("renderpartial",e.renderPartial,e),a.on("renderall",e.renderAll,e),a.on("extremachange",(function(e){t._config.onExtremaChange&&t._config.onExtremaChange({min:e.min,max:e.max,gradient:t._config.gradient||t._config.defaultGradient})})),i.setCoordinator(a)};function s(){var s=this._config=r(e,arguments[0]||{});if(this._coordinator=new t,s.plugin){var h=s.plugin;if(!e.plugins[h])throw new Error("Plugin '"+h+"' not found. Maybe it was not registered.");var o=e.plugins[h];this._renderer=new o.renderer(s),this._store=new o.store(s)}else this._renderer=new n(s),this._store=new a(s);i(this)}return s.prototype={addData:function(){return this._store.addData.apply(this._store,arguments),this},removeData:function(){return this._store.removeData&&this._store.removeData.apply(this._store,arguments),this},setData:function(){return this._store.setData.apply(this._store,arguments),this},setDataMax:function(){return this._store.setDataMax.apply(this._store,arguments),this},setDataMin:function(){return this._store.setDataMin.apply(this._store,arguments),this},configure:function(t){return this._config=r(this._config,t),this._renderer.updateConfig(this._config),this._coordinator.emit("renderall",this._store._getInternalData()),this},repaint:function(){return this._coordinator.emit("renderall",this._store._getInternalData()),this},getData:function(){return this._store.getData()},getDataURL:function(){return this._renderer.getDataURL()},getValueAt:function(t){return this._store.getValueAt?this._store.getValueAt(t):this._renderer.getValueAt?this._renderer.getValueAt(t):null}},s}();return{create:function(t){return new s(t)},register:function(t,a){e.plugins[t]=a}}}));