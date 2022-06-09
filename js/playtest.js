//点击继续（剧情1-2）
 document.getElementById("jixu").onclick=function(){
        document.querySelector('.duihua').setAttribute("src","../img/playtest/测试对话剧情2-文字对话.png");
		document.getElementById("jixu").style.display="none";
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情1-背景图虚化.jpg");
		document.querySelector('.xuanxiang1').style.display="block";
		document.querySelector('.xuanxiang2').style.display="block";	
}

//点击选项进入剧情3
 document.querySelector('.xuanxiang1').onclick=function(){
	    document.querySelector('.xuanxiang1').style.display="none";
	    document.querySelector('.xuanxiang2').style.display="none";	
        document.querySelector('.duihua').style.display="none";
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情3-背景图.jpg");
		document.querySelector('.touxiang1').style.display="block";
		document.querySelector('.duihua2').style.display="block";
		document.querySelector('.touxiang2').style.display="block";
		document.querySelector('.duihua3').style.display="block";	
		document.querySelector('.startbtn').style.display="block";	
}

//点击开始答题进入选题
 document.querySelector('.startbtn').onclick=function(){
	    document.querySelector('.touxiang1').style.display="none";
	    document.querySelector('.duihua2').style.display="none";
	    document.querySelector('.touxiang2').style.display="none";
	    document.querySelector('.duihua3').style.display="none";	
	    document.querySelector('.startbtn').style.display="none";
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情3-背景图2.jpg");
		document.getElementById("shijuan1").style.display="block";
		document.getElementById("shijuan2").style.display="block";
		document.getElementById("shijuan3").style.display="block";
		document.getElementById("shijuan4").style.display="block";
		document.getElementById("shijuan5").style.display="block";
 }
 
 
 //点击进入判断题
 
    var examid;  //试卷编号
	var PtestList=new Array();   //某套试卷列表
	var Pid;  //题目编号
	var Ptype;  //题目类型
	var Ptitle;  //题目
	var Poption1;   //选项1
	var Poption2;   //选项2
	var Poption3;   //选项3
	var Pexplain;   //解释
	var Pques;      //答案
	var PDXZcount=0;  //判断选择题计数
 
 for (var i = 0; i < 15; i++) { //一维长度为15
 	PtestList[i] = new Array();
 	for (var j = 0; j < 7; j++) { //二维长度为7
 		PtestList[i][j] = i + j;
 	}
 }
 
 function findsjImg(shijuan){   //获取哪套试题
 	 var id=shijuan.id;
 	 var examid=document.getElementById(id).attributes[2].value; 
	 findPrbByExamid(examid);
 }
 
  document.querySelector('.shijuan').addEventListener("click",function(event){
      findsjImg(event.target);
  },false);
  
  
  //根据试卷id取试题
  function findPrbByExamid(examid) {
      $.ajax({
          crossDomain: true,
          url: 'http://5352i364d5.zicp.vip/web_war_exploded/PrbServlet', //接口URL
          data: { // 传数据
              method: 'findPrbByExamid',
              examid:examid //试卷id
          },
          type: 'get', //get类型
          dataType: 'json',
          success: function(res) {
  			var len=res.length;
  			for (i = 1; i <= len; i++){
  				var oData=res[i-1];
  				PtestList[i-1][0]=oData.pid;
  				PtestList[i-1][1]=oData.ptitle;
  				PtestList[i-1][2]=oData.poption1;
  				PtestList[i-1][3]=oData.poption2;
  				PtestList[i-1][4]=oData.poption3;
  				PtestList[i-1][5]=oData.explain;
  				PtestList[i-1][6]=oData.pques;
  				}
				 displayFirst(PtestList);
  			}
      });
  } 
  
  
  
//进入判断的第一题
 function displayFirst(PtestList){
 	 document.getElementById("shijuan1").style.display="none";
 	 document.getElementById("shijuan2").style.display="none";
 	 document.getElementById("shijuan3").style.display="none";
 	 document.getElementById("shijuan4").style.display="none";
 	 document.getElementById("shijuan5").style.display="none";
 	 document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试判断题-背景图.jpg");
	 document.getElementById("PDnext").style.display="block";
	 document.getElementById("PDtitle").style.display="block";
	 document.getElementById("PDtrue").style.display="block";
	 document.getElementById("PDfalse").style.display="block";
	 //获取这一卷试题的第一题
	 PDXZcount=1;  //判断题第一题
	 
	 setPXList(PtestList,PDXZcount);
	 
	 //文字逐个显示
	 oneByOne();   
 }
 
 function setPXList(PtestList,PDXZcount){
	
	 Ptitle = PtestList[PDXZcount-1][1];  //题目
	 Poption1 = PtestList[PDXZcount-1][2];   //选项1
	 Poption2 = PtestList[PDXZcount-1][3];;   //选项2
	 Poption3 = PtestList[PDXZcount-1][4];;   //选项3
	 Pexplain = PtestList[PDXZcount-1][5];   //解释
	 Pques = PtestList[PDXZcount-1][6];      //答案
	 	
 }

  /*文字逐个展示*/
var count=1;  //题目的字数
	
         function oneByOne()
         {
             var screen = Ptitle.substr(0, count);
             document.getElementById("PDtitle").innerHTML = screen;   
             count++;
             if (count > Ptitle.length)
                 return;
             setTimeout(oneByOne, 60);
         }

 

/*判断选择是否正确*/
     var answer;  //正确答案选项
	 
//点击“正确”按钮
    function judgePDtrue(){
		answer=Pques;
		if(answer=="A"){     //正确答案为A，选择正确
			document.getElementById("RaW1").style.display="block";
			document.getElementById("RaW1").setAttribute("src","../img/playtest/测试判断题-对号.png");
		} else if(answer=="B"){    //正确答案为B，选择错误
			document.getElementById("RaW1").style.display="block";
			document.getElementById("RaW2").style.display="block";
			document.getElementById("RaW1").setAttribute("src","../img/playtest/测试判断题-叉号.png");
			document.getElementById("RaW2").setAttribute("src","../img/playtest/测试判断题-对号.png");
		}
		document.getElementById("explain").style.display="block";
		document.getElementById("PDexplain").innerHTML=Pexplain;
	  }

//点击“错误”按钮
	function judgePDfalse(){
		answer=Pques;
	if(answer=="B"){     //正确答案为B，选择正确
			document.getElementById("RaW2").style.display="block";
			document.getElementById("RaW2").setAttribute("src","../img/playtest/测试判断题-对号.png");
		} else if(answer=="A"){    //正确答案为A，选择错误
			document.getElementById("RaW1").style.display="block";
			document.getElementById("RaW2").style.display="block";
			document.getElementById("RaW2").setAttribute("src","../img/playtest/测试判断题-叉号.png");
			document.getElementById("RaW1").setAttribute("src","../img/playtest/测试判断题-对号.png");
		}
		document.getElementById("explain").style.display="block";
		document.getElementById("PDexplain").innerHTML=Pexplain;
	  }	  


/*判断目前是第几题*/
    var PDnextcount=0; //点击PDnext按钮的次数
	document.getElementById("PDnext").onclick=function(){
		PDnextcount++;
		closePD();
		if(PDnextcount<=9){
			displayPD();
		}else{
		 document.getElementById("PDnext").style.display="none";	
		 document.getElementById("PDtrue").style.display="none";	
		 document.getElementById("PDfalse").style.display="none";	
		 document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情45-背景图.jpg");
		 document.getElementById("next1").style.display="block";
		 document.querySelector('.duihua4').style.display="block";
		}
		
	}

    function closePD(){
		document.getElementById("explain").style.display="none";
		document.getElementById("PDtitle").style.display="none";
		document.getElementById("RaW1").style.display="none";
		document.getElementById("RaW2").style.display="none";
	}
	
	function displayPD(){
		document.getElementById("PDtitle").style.display="block";
		zicount=1;
		PDXZcount++;
		setPXList(PtestList,PDXZcount);
		document.getElementById("PDtitle").innerHTML=Ptitle;
        oneByOne(); 
	}
	
	
//点击继续进入剧情5
 document.getElementById("next1").onclick=function(){
        document.querySelector('.duihua4').setAttribute("src","../img/playtest/测试对话剧情5-文字对话.png");
		document.getElementById("next1").style.display="none";
		document.getElementById("next2").style.display="block";
}

//点击继续进入剧情6
 document.getElementById("next2").onclick=function(){
        document.querySelector('.duihua4').setAttribute("src","../img/playtest/测试对话剧情6-文字对话.png");
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情6-虚化背景图.jpg");
		document.getElementById("next2").style.display="none";
		document.querySelector('.xuanxiang3').style.display="block";
		document.querySelector('.xuanxiang4').style.display="block";	
}


//点击选项A进入选择题剧情
 document.querySelector('.xuanxiang3').onclick=function(){
	    document.querySelector('.xuanxiang3').style.display="none";
	    document.querySelector('.xuanxiang4').style.display="none";	
        document.querySelector('.duihua4').style.display="none";
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试选择题-背景图.jpg");
		document.querySelector('.duihua5').style.display="block";
		document.querySelector('.duihua5').setAttribute("src","../img/playtest/测试选择题1-文字对话1.png");
		document.getElementById("next3").style.display="block";	
}


//点击继续进入选择题1
 document.getElementById("next3").onclick=function(){
        document.querySelector('.duihua5').setAttribute("src","../img/playtest/测试选择题1-文字底框.png");
		document.getElementById("XZtitle").style.display="block";
		PDXZcount++;
		setPXList(PtestList,PDXZcount);
        document.getElementById("XZtitle").innerHTML=Ptitle;
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试选择题-虚化背景图.jpg");
		document.getElementById("next3").style.display="none";
		document.querySelector('.Option1div').style.display="block";
		document.getElementById("option1").style.display="block";
		document.getElementById("option1").innerHTML=Poption1;
		document.querySelector('.Option2div').style.display="block";
		document.getElementById("option2").style.display="block";
		document.getElementById("option2").innerHTML=Poption2;
		document.querySelector('.Option3div').style.display="block";
		document.getElementById("option3").style.display="block";	
		document.getElementById("option3").innerHTML=Poption3;
}

/*判断选择是否正确*/
     var XZanswer;  //正确答案选项
     var XZabc;    //返回哪个选项是正确答案
	 
//判断哪个选项是正确答案
    function judgeXZtrue(){
		XZanswer=Pques;
		xzA=document.getElementById("option1").attributes[1].value;   //获取P的值
		XZA=document.querySelector('.Option1div').attributes[2].value;   //获取img的值
		xzB=document.getElementById("option2").attributes[1].value;
		XZB=document.querySelector('.Option2div').attributes[2].value;
		xzC=document.getElementById("option3").attributes[1].value;
		XZC=document.querySelector('.Option3div').attributes[2].value;
		if(XZanswer==xzA||XZanswer==XZA){
			XZabc=1;
		}else if(XZanswer==xzB||XZanswer==XZB){
			XZabc=2;	
		}else if(XZanswer==xzC||XZanswer==XZC){
			XZabc=3;
		}
	}
	 
//点击“A”按钮
    function judgeXZA(){
        judgeXZtrue();
		if(XZabc==1){     //正确答案为A，选择正确
			document.getElementById("RaWA").style.display="block";
			document.getElementById("RaWC").style.display="none";
			document.getElementById("RaWB").style.display="none";
			document.getElementById("RaWA").setAttribute("src","../img/playtest/测试选择题-对号.png");
			document.getElementById("XZtitle").innerHTML="恭喜你，回答正确。"+Pexplain;
		} else if(XZabc==2){    //正确答案为A，选择错误
			document.getElementById("RaWA").style.display="block";
			document.getElementById("RaWB").style.display="block";
			document.getElementById("RaWC").style.display="none";
			document.getElementById("RaWA").setAttribute("src","../img/playtest/测试判断题-叉号.png");
			document.getElementById("RaWB").setAttribute("src","../img/playtest/测试选择题-对号.png");
			document.getElementById("XZtitle").innerHTML="很可惜，回答错误。"+Pexplain;
		} else if(XZabc==3){    //正确答案为A，选择错误
			document.getElementById("RaWA").style.display="block";
			document.getElementById("RaWC").style.display="block";
			document.getElementById("RaWB").style.display="none";
			document.getElementById("RaWA").setAttribute("src","../img/playtest/测试判断题-叉号.png");
			document.getElementById("RaWC").setAttribute("src","../img/playtest/测试选择题-对号.png");
			document.getElementById("XZtitle").innerHTML="很可惜，回答错误。"+Pexplain;
		}	
		document.getElementById("XZnext").style.display="block";
	  }

//点击“B”按钮
	function judgeXZB(){
        judgeXZtrue();
		if(XZabc==1){     //正确答案为A，选择错误
		document.getElementById("RaWA").style.display="block";
		document.getElementById("RaWB").style.display="block";
		document.getElementById("RaWC").style.display="none";
		document.getElementById("RaWB").setAttribute("src","../img/playtest/测试判断题-叉号.png");
		document.getElementById("RaWA").setAttribute("src","../img/playtest/测试选择题-对号.png");
		document.getElementById("XZtitle").innerHTML="很可惜，回答错误。"+Pexplain;
		} else if(XZabc==2){    //正确答案为B，选择正确
		    document.getElementById("RaWA").style.display="none";
		    document.getElementById("RaWC").style.display="none";
		    document.getElementById("RaWB").style.display="block";
		    document.getElementById("RaWB").setAttribute("src","../img/playtest/测试选择题-对号.png");
		    document.getElementById("XZtitle").innerHTML="恭喜你，回答正确。"+Pexplain;
		} else if(XZabc==3){    //正确答案为C，选择错误
		document.getElementById("RaWA").style.display="none";
			document.getElementById("RaWB").style.display="block";
			document.getElementById("RaWC").style.display="block";
			document.getElementById("RaWB").setAttribute("src","../img/playtest/测试判断题-叉号.png");
			document.getElementById("RaWC").setAttribute("src","../img/playtest/测试选择题-对号.png");
			document.getElementById("XZtitle").innerHTML="很可惜，回答错误。"+Pexplain;  //解释
		}	
		document.getElementById("XZnext").style.display="block";
	  }	  


//点击“C”按钮
	function judgeXZC(){
        judgeXZtrue();
		if(XZabc==1){     //正确答案为A，选择错误
		document.getElementById("RaWA").style.display="block";
		document.getElementById("RaWC").style.display="block";
		document.getElementById("RaWB").style.display="none";
		document.getElementById("RaWC").setAttribute("src","../img/playtest/测试判断题-叉号.png");
		document.getElementById("RaWA").setAttribute("src","../img/playtest/测试选择题-对号.png");
		document.getElementById("RaWB").style.display="none";
		document.getElementById("XZtitle").innerHTML="很可惜，回答错误。"+Pexplain;
		} else if(XZabc==2){    //正确答案为B，选择正确
		document.getElementById("RaWB").style.display="block";
		document.getElementById("RaWC").style.display="block";
		document.getElementById("RaWA").style.display="none";
		document.getElementById("RaWC").setAttribute("src","../img/playtest/测试判断题-叉号.png");
		document.getElementById("RaWB").setAttribute("src","../img/playtest/测试选择题-对号.png");
		document.getElementById("XZtitle").innerHTML="很可惜，回答错误。"+Pexplain;
		} else if(XZabc==3){    //正确答案为C，选择错误
		document.getElementById("RaWA").style.display="none";
		document.getElementById("RaWB").style.display="none";
		document.getElementById("RaWC").style.display="block";
		document.getElementById("RaWC").setAttribute("src","../img/playtest/测试选择题-对号.png");
		document.getElementById("XZtitle").innerHTML="恭喜你，回答正确。"+Pexplain;
		}	
		document.getElementById("XZnext").style.display="block";
	  }	 




/*判断目前是第几题*/
    var XZnextcount=0; //点击XZnext按钮的次数
	document.getElementById("XZnext").onclick=function(){
		XZnextcount++;
		closeXZ();
		if(XZnextcount<=4){
			displayXZ();
		}else{
		document.querySelector('.Option1div').style.display="none";
		document.getElementById("option1").style.display="none";
		document.querySelector('.Option2div').style.display="none";
		document.getElementById("option2").style.display="none";
		document.querySelector('.Option3div').style.display="none";
		document.getElementById("option3").style.display="none";	
		document.getElementById("XZtitle").style.display="none";
		document.getElementById("RaWA").style.display="none";
		document.getElementById("RaWB").style.display="none";
		document.getElementById("RaWC").style.display="none";
		document.getElementById("XZnext").style.display="none";
		document.querySelector('.duihua5').style.display="none";
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情1-背景图.jpg");
		document.querySelector('.duihua6').style.display="block";
		document.getElementById("next4").style.display="block";
		}
		
	}
	
    function closeXZ(){
		document.querySelector('.Option1div').style.display="none";
		document.getElementById("option1").style.display="none";
		document.querySelector('.Option2div').style.display="none";
		document.getElementById("option2").style.display="none";
		document.querySelector('.Option3div').style.display="none";
		document.getElementById("option3").style.display="none";	
		document.getElementById("XZtitle").style.display="none";
		document.getElementById("RaWA").style.display="none";
		document.getElementById("RaWB").style.display="none";
		document.getElementById("RaWC").style.display="none";
		document.getElementById("XZnext").style.display="none";
		if(XZnextcount==1){
			document.querySelector('.duihua5').setAttribute("src","../img/playtest/测试选择题2-文字底框.png");
		}else if(XZnextcount==2){
			document.querySelector('.duihua5').setAttribute("src","../img/playtest/测试选择题3-文字底框.png");
		}else if(XZnextcount==3){
			document.querySelector('.duihua5').setAttribute("src","../img/playtest/测试选择题4-文字底框.png");
		}else if(XZnextcount==4){
			document.querySelector('.duihua5').setAttribute("src","../img/playtest/测试选择题5-文字底框.png");
		}
	}
	
	function displayXZ(){	
		PDXZcount++;
		setPXList(PtestList,PDXZcount);
        document.getElementById("XZtitle").innerHTML=Ptitle; 
		document.getElementById("XZtitle").style.display="block";
		document.querySelector('.Option1div').style.display="block";
		document.getElementById("option1").style.display="block";
		document.getElementById("option1").innerHTML=Poption1;
		document.querySelector('.Option2div').style.display="block";
		document.getElementById("option2").style.display="block";
		document.getElementById("option2").innerHTML=Poption2;
		document.querySelector('.Option3div').style.display="block";
		document.getElementById("option3").style.display="block";
		document.getElementById("option3").innerHTML=Poption3;
	}	
	
	//结尾选项
	document.getElementById("next4").onclick=function(){
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情1-背景图虚化.jpg");
		document.getElementById("next4").style.display="none";
		document.querySelector('.xuanxiang5').style.display="block";
		document.querySelector('.xuanxiang6').style.display="block";
	}
	
	//返回选卷轴处
	function backToXuanti1(){
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情3-背景图2.jpg");
		document.querySelector('.duihua4').style.display="none";
		document.getElementById("next2").style.display="none";	
		document.querySelector('.xuanxiang3').style.display="none";
		document.querySelector('.xuanxiang4').style.display="none";
		document.getElementById("shijuan1").style.display="block";
		document.getElementById("shijuan2").style.display="block";
		document.getElementById("shijuan3").style.display="block";
		document.getElementById("shijuan4").style.display="block";
		document.getElementById("shijuan5").style.display="block";
		PDXZcount=0;
		PDnextcount=0;
		XZnextcount=0;
	}
	
	function backToXuanti2(){
		document.getElementById("JQbeijing").setAttribute("src","../img/playtest/测试对话剧情3-背景图2.jpg");
		document.getElementById("next4").style.display="none";
		document.querySelector('.duihua6').style.display="none";
		document.querySelector('.xuanxiang5').style.display="none";
		document.querySelector('.xuanxiang6').style.display="none";
		document.getElementById("shijuan1").style.display="block";
		document.getElementById("shijuan2").style.display="block";
		document.getElementById("shijuan3").style.display="block";
		document.getElementById("shijuan4").style.display="block";
		document.getElementById("shijuan5").style.display="block";
		PDXZcount=0;
		PDnextcount=0;
		XZnextcount=0;
	}