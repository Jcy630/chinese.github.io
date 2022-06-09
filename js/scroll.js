/*左右移动*/
  var pos = 0;
  var zuogun = document.getElementById("Lmove");   
  var yougun = document.getElementById("Rmove");   
  var elem = document.getElementById("changtu");   
  var move=0;
  var remove=0;
  var R=0;
  
 zuogun.onmouseover=function Zmove() {
  
  
  var id = setInterval(frame, 5);
  function frame() {

    if (pos==-3100) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.left = pos + "px"; 
	  if(move==1)
	  { clearInterval(id);move=0;}
    }
  }
}

 zuogun.onmouseout=function Zremove() {
     move=1;
}

yougun.onmouseover=function Rmove() {
  
  var id = setInterval(frame, 5);
  function frame() {

    if (pos==3100) {
      clearInterval(id);
    } else if(elem.getBoundingClientRect().left==0){
		clearInterval(id);R=1;
	}else{
      pos++; 
      elem.style.left = pos + "px"; 
	  if(remove==1)
	  { clearInterval(id);remove=0;}
    }
  }
}

 yougun.onmouseout=function RRemove() {
     
	 if(R==0){
		remove=1; 
	 }else{
		remove=0; 
	 }
}

