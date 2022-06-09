/*鼠标点击第二页*/
 document.querySelector('.di2ye').onclick=function(){
		document.querySelector('.di1ye').setAttribute("src","../img/introduction/简介-壹yellow.png");
		document.querySelector('.di2ye').setAttribute("src","../img/introduction/简介-贰red.png");
		document.getElementById("pagetwo").style.display="block";
		document.getElementById("pageone").style.display="none";
		
}

/*鼠标点击第一页*/
 document.querySelector('.di1ye').onclick=function(){
		document.querySelector('.di1ye').setAttribute("src","../img/introduction/简介-壹red.png");
		document.querySelector('.di2ye').setAttribute("src","../img/introduction/简介-贰yellow.png");
		document.getElementById("pageone").style.display="block";
		document.getElementById("pagetwo").style.display="none";
}