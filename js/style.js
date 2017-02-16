w();
window.addEventListener('resize',w)
function w(){
	var deviceWidth=document.documentElement.clientWidth;
	if(deviceWidth>720){
		deviceWidth=720;
	}else if(deviceWidth<320){
		deviceWidth=320;
	}
	document.documentElement.style.fontSize=(deviceWidth/7.2)+'px';
}

