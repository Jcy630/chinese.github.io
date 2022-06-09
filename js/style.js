/*------获取当前文件名BEGIN------*/
var filename = location.href.split('/');
/*------获取当前文件名END------*/

// /*开门动画*/
// function first() {
// 	document.getElementById("pic1").setAttribute("src", "./img/gallery/壹-red.png");
// }

function setOpenAnDisplayNone() {
	document.getElementById("biaoti1").style.display = 'none';
	document.getElementById("biaoti2").style.display = 'none';
	document.getElementById("biaoti3").style.display = 'none';
}
/*从首页进入，有动画*/
if (filename[filename.length - 1] == 'gallery.html') {
	var bsList = new Array(); //部首列表			
	var List = new Array(); //全部数据
	findBsList();//获取部首
	setTimeout('setOpenAnDisplayNone()', 10000);
}
/*从三级返回，无动画*/
if (filename[filename.length - 1] == 'gallery.html?x=0') {
	setOpenAnDisplayNone();
	var bsList = new Array(); //部首列表			
	var List = new Array(); //全部数据
	findBsList();
}
//查找全部部首(不重复)
function findBsList() {
	$.ajax({
		crossDomain: true,
		url: 'http://5352i364d5.zicp.vip/web_war_exploded/CrServlet', //根据用户id查询用户的接口URL
		data: { // 传数据
			method: 'findBsList',
		},
		type: 'get', //get类型
		dataType: 'json',
		success: function(res) {

			var len = res.length;
			for (i = 1; i <= len; i++) {
				var oData = res[i - 1];
				bsList[i - 1] = oData.crradical; //全部部首
			}
			setPaiByRad(bsList);
		}
	});
}

//显示牌子	
function setPaiByRad(bsList) {
	setRadPaiDisplayNone();
	for (i = 1; i <= bsList.length; i++) {
		var CLpaizi = "CLpaizi" + i; //根据i值生成div的id
		var bushou = "bushou" + i; //根据i值生成牌子的id
		document.getElementById(bushou).innerHTML = bsList[i - 1]; //根据id设置字
		document.getElementById(CLpaizi).style.display = 'block'; //根据id设置div可见
		document.getElementById(CLpaizi).value = bsList[i - 1];
		setErJiPaiOnclick(CLpaizi); //为牌子添加点击事件

	}

}
//隐藏牌子	
function setRadPaiDisplayNone() {
	for (i = 1; i < 61; i++) {
		var CLpaizi = "CLpaizi" + i; //根据i值生成div的id
		document.getElementById(CLpaizi).style.display = 'none'; //根据id设置div不可见
	}
}

/*设置二级牌子点击事件函数*/
function setErJiPaiOnclick(paiziId) {
	document.getElementById(paiziId).onclick = function() { //设置二级牌子点击事件

		var bushou = document.getElementById(paiziId).value;
		//paiziId.classList.add('brandInAn');
		window.location.href = "details.html?bushou=" + bushou;
	}
}



/*details.html判断*/
var detailsPage = RegExp(/details/); //正则表达
if (detailsPage.test(filename)) {
	pagecolor();
	GetRequest();
	//}
	function GetRequest() {
		var url = decodeURIComponent(location.search); //获取url中"?"符后的字串并且进行解码，因为js会对url中传递的中文参数进行编码
		if (url.indexOf("?") != -1) { //判断是否有参数
			var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
			strs = str.split("="); //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
			findCharByBs(strs[1]); //查询部首
			document.getElementById('radical').innerHTML = strs[1] + '部'; //设置字//设置部首
		}
	}

	//给页码按钮添加初始图片
	function pagecolor() {
		document.getElementById("page-pic1").setAttribute("src", "../img/gallery/壹-red.png");
		document.getElementById("page-pic2").setAttribute("src", "../img/gallery/贰-yellow.png");
		document.getElementById("page-pic3").setAttribute("src", "../img/gallery/叁-yellow.png");
		document.getElementById("page-pic4").setAttribute("src", "../img/gallery/肆-yellow.png");
		document.getElementById("page-pic5").setAttribute("src", "../img/gallery/伍-yellow.png");
		document.getElementById("page-pic6").setAttribute("src", "../img/gallery/陆-yellow.png");
		document.getElementById("page-pic7").setAttribute("src", "../img/gallery/柒-yellow.png");
		document.getElementById("page-pic8").setAttribute("src", "../img/gallery/捌-yellow.png");
		document.getElementById("page-pic9").setAttribute("src", "../img/gallery/玖-yellow.png");
	}


	//页码1切换为黄色
	function page1yellow() {
		document.getElementById("page-pic1").setAttribute("src", "../img/gallery/壹-yellow.png");
	}

	//点击页码按钮
	function processInnderDiv(domDiv) {
		var i = domDiv.id /*获取当前元素的id值*/
		pagecolor()
		/*修改图片内容*/
		if (i == "page-pic2") {
			page1yellow();
			domDiv.setAttribute("src", "../img/gallery/贰-red.png");
		} else if (i == "page-pic3") {
			page1yellow();
			domDiv.setAttribute("src", "../img/gallery/叁-red.png");
		} else if (i == "page-pic4") {
			page1yellow();
			domDiv.setAttribute("src", "../img/gallery/肆-red.png");
		} else if (i == "page-pic5") {
			page1yellow();
			domDiv.setAttribute("src", "../img/gallery/伍-red.png");
		} else if (i == "page-pic6") {
			page1yellow();
			domDiv.setAttribute("src", "../img/gallery/陆-red.png");
		} else if (i == "page-pic7") {
			page1yellow();
			domDiv.setAttribute("src", "../img/gallery/柒-red.png");
		} else if (i == "page-pic8") {
			page1yellow();
			domDiv.setAttribute("src", "../img/gallery/捌-red.png");
		} else if (i == "page-pic9") {
			page1yellow();
			domDiv.setAttribute("src", "../img/gallery/玖-red.png");
		}
	}

	/*监听点击的是哪个页码元素*/
	document.querySelector('.page').addEventListener("click", function(event) {
		processInnderDiv(event.target);
	}, false);

	/*文字解释弹窗*/

	// 获取弹窗
	var modal = document.getElementById('myModal');

	// 打开弹窗的按钮对象
	var btn = document.getElementsByName("myBrand");

	// 获取 <span> 元素，用于关闭弹窗
	var close = document.querySelector('.close');

	// 写一个函数改变标签的样式，this指向需要改变的对象
	function change(zi, pinyin, bihua, wubi, shiyi) {
		modal.style.display = "block";



		var x = document.getElementsByName("mohu");
		for (var i = 0; i < x.length; i++) {
			x[i].style.filter = "blur(3px)"; /* blur 模糊*/
		}
		var y = document.getElementsByName("myBrand");
		for (var i = 0; i < y.length; i++) {
			y[i].style.filter = "blur(3px)";
		}
		document.getElementById('zi').innerHTML = zi; //设置字
		document.getElementById('pinyin').innerHTML = pinyin; //设置拼音
		document.getElementById('bihua').innerHTML = bihua; //根据笔画数
		document.getElementById('wubi').innerHTML = wubi; //根据五笔
		document.getElementById('shiyi').innerHTML = shiyi; //根据释义
		document.getElementById('duyin').onclick = function() { //设置播放按钮
			playAudio(zi);
		}

	}

	// 点击 <img> (已阅), 关闭弹窗
	close.onclick = function() {
		modal.style.display = "none";
		playSound('捡起羊皮纸.wav');
		//		playAudioEffects(close);
		var x = document.getElementsByName("mohu");
		for (var i = 0; i < x.length; i++) {
			x[i].style.filter = "blur(0px)";
		}
		var y = document.getElementsByName("myBrand");
		for (var i = 0; i < y.length; i++) {
			y[i].style.filter = "blur(0px)";
		}
	}

	// 在用户点击其他地方时，关闭弹窗
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			var x = document.getElementsByName("mohu");
			for (var i = 0; i < x.length; i++) {
				x[i].style.filter = "blur(0px)";
			}
			var y = document.getElementsByName("myBrand");
			for (var i = 0; i < y.length; i++) {
				y[i].style.filter = "blur(0px)";
			}
		}

	}


	/*获取数据*/
	var resLen; //存放数据长度
	var crList;
	var pageList = new Array();
	for (var i = 0; i < 7; i++) { //一维长度为7
		pageList[i] = new Array();
		for (var j = 0; j < 5; j++) { //二维长度为5
			pageList[i][j] = i + j;

		}

	}

	//调用servelt
	function findCharByBs(crradical) {
		$.ajax({
			crossDomain: true,
			url: 'http://5352i364d5.zicp.vip/web_war_exploded/CrServlet', //根据用户id查询用户的接口URL
			data: { // 传数据
				method: 'findCharByBs',
				crradical: crradical, //部首
			},
			type: 'get', //get类型
			dataType: 'json',
			success: function(res) {
				crListLen = res.length;
				crList = res;
				start = 1;
				end = crListLen;
				if (crListLen <= 7) {
					PagePlan1(crList, start, crListLen);
				} else if (crListLen <= 14) {
					PagePlan2(crList, start, crListLen);
				} else if (crListLen <= 21) {
					PagePlan3(crList, start, crListLen);
				} else if (crListLen <= 28) {
					PagePlan4(crList, start, crListLen);
				} else if (crListLen <= 35) {
					PagePlan5(crList, start, crListLen);
				} else if (crListLen <= 42) {
					PagePlan6(crList, start, crListLen);
				} else if (crListLen <= 49) {
					PagePlan7(crList, start, crListLen);
				}
			}
		});
	}
	/*--------按钮方案BEGIN-------*/
	/*	设置按钮可见
		btnNum-需要展示的按钮数量
	*/
	function setPageBtnVisible(btnNum) {
		addBrandInAn(); //给所有牌子设置入场动画
		for (i = 1; i <= btnNum; i++) {
			var btnName = 'page' + i;
			document.getElementById(btnName).style.display = 'block'; //设置第一页按钮可见
		}
	}

	//PagePlan1
	function PagePlan1(crList, start, end) {
		setPageBtnVisible(1);
		document.getElementById('page-pic1').onclick = function() { //第一页按钮点击事件
			setPaiByLen(crList, start, end);
		}
		document.getElementById("page-pic1").onclick(); //默认第一页
	}
	//PagePlan2
	function PagePlan2(crList, start, end) {
		setPageBtnVisible(2);
		document.getElementById('page-pic1').onclick = function() { //第一页按钮点击事件
			setPaiByLen(crList, start, 7);
		}
		document.getElementById('page-pic2').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 8, end);
		}
		document.getElementById("page-pic1").onclick(); //默认第一页
	}
	//PagePlan3
	function PagePlan3(crList, start, end) {
		setPageBtnVisible(3);
		document.getElementById('page-pic1').onclick = function() { //第一页按钮点击事件
			setPaiByLen(crList, start, 7);
		}
		document.getElementById('page-pic2').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 8, 14);
		}
		document.getElementById('page-pic3').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 15, end);
		}
		document.getElementById("page-pic1").onclick(); //默认第一页
	}
	//PagePlan4
	function PagePlan4(crList, start, end) {
		setPageBtnVisible(4);
		document.getElementById('page-pic1').onclick = function() { //第一页按钮点击事件
			setPaiByLen(crList, start, 7);
		}
		document.getElementById('page-pic2').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 8, 14);
		}
		document.getElementById('page-pic3').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 15, 21);
		}
		document.getElementById('page-pic4').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 22, end);
		}
		document.getElementById("page-pic1").onclick(); //默认第一页
	}
	//PagePlan5
	function PagePlan5(crList, start, end) {
		setPageBtnVisible(5);
		document.getElementById('page-pic1').onclick = function() { //第一页按钮点击事件
			setPaiByLen(crList, start, 7);
		}
		document.getElementById('page-pic2').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 8, 14);
		}
		document.getElementById('page-pic3').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 15, 21);
		}
		document.getElementById('page-pic4').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 22, 28);
		}
		document.getElementById('24').onclick = function() { //第二页按钮点击事件
			setPaiByLen(crList, 29, end);
		}
		document.getElementById("page-pic1").onclick(); //默认第一页
	}
	//PagePlan6
	function PagePlan6(crList, start, end) {
		setPageBtnVisible(6);
		document.getElementById('page-pic1').onclick = function() { //第1页按钮点击事件
			setPaiByLen(crList, start, 7);
		}
		document.getElementById('page-pic2').onclick = function() { //第2页按钮点击事件
			setPaiByLen(crList, 8, 14);
		}
		document.getElementById('page-pic3').onclick = function() { //第3页按钮点击事件
			setPaiByLen(crList, 15, 21);
		}
		document.getElementById('page-pic4').onclick = function() { //第4页按钮点击事件
			setPaiByLen(crList, 22, 28);
		}
		document.getElementById('page-pic5').onclick = function() { //第5页按钮点击事件
			setPaiByLen(crList, 29, 35);
		}
		document.getElementById('page-pic6').onclick = function() { //第6页按钮点击事件
			setPaiByLen(crList, 36, end);
		}
		document.getElementById("page-pic1").onclick(); //默认第一页
	}
	//PagePlan7
	function PagePlan7(crList, start, end) {
		setPageBtnVisible(7);
		document.getElementById('page-pic1').onclick = function() { //第1页按钮点击事件
			setPaiByLen(crList, start, 7);
		}
		document.getElementById('page-pic2').onclick = function() { //第2页按钮点击事件
			setPaiByLen(crList, 8, 14);
		}
		document.getElementById('page-pic3').onclick = function() { //第3页按钮点击事件
			setPaiByLen(crList, 15, 21);
		}
		document.getElementById('page-pic4').onclick = function() { //第4页按钮点击事件
			setPaiByLen(crList, 22, 28);
		}
		document.getElementById('page-pic5').onclick = function() { //第5页按钮点击事件
			setPaiByLen(crList, 29, 35);
		}
		document.getElementById('page-pic6').onclick = function() { //第6页按钮点击事件
			setPaiByLen(crList, 36, 42);
		}
		document.getElementById('page-pic7').onclick = function() { //第7页按钮点击事件
			setPaiByLen(crList, 43, end);
		}
		document.getElementById("page-pic1").onclick(); //默认第一页
	}
	/*--------按钮方案END-------*/



	function setPaiByLen(crList, start, end) {
		setPaiDisplayNone();
		/*	i  牌子id，数值从1-7
			start 从第start条开始取结果
		*/
		setTimeout(function() {
			for (let i = 1; start <= end; start++, i++) {
				let oData = crList[start - 1];
				let brand = "brand" + i; //根据i值生成div的id
				let paizi = "paizi" + i; //根据i值生成牌子的id
				document.getElementById(paizi).innerHTML = oData.crname; //根据id设置字
				document.getElementById(brand).style.display = 'block'; //根据id设置div可见
				pageList[i - 1][0] = oData.crname; //字
				pageList[i - 1][1] = oData.crspelling; //拼音
				pageList[i - 1][2] = oData.crstrokes; //笔画
				pageList[i - 1][3] = oData.crwubi; //五笔
				pageList[i - 1][4] = oData.crexplain; //讲解
				setBrandClick(i); //给二级牌子添加点击按钮

			}
		}, 100);


	}
	/*给每个牌子添加按钮事件*/
	function setBrandClick(i) {
		switch (i) {
			case 1:
				document.getElementById('brand1').onclick = function() {
					change(pageList[0][0], pageList[0][1], pageList[0][2], pageList[0][3], pageList[0][4]);
				}
			case 2:
				document.getElementById('brand2').onclick = function() {
					change(pageList[1][0], pageList[1][1], pageList[1][2], pageList[1][3], pageList[1][4]);
				}
			case 3:
				document.getElementById('brand3').onclick = function() {
					change(pageList[2][0], pageList[2][1], pageList[2][2], pageList[2][3], pageList[2][4]);
				}
			case 4:
				document.getElementById('brand4').onclick = function() {

					change(pageList[3][0], pageList[3][1], pageList[3][2], pageList[3][3], pageList[3][4]);
				}
			case 5:
				document.getElementById('brand5').onclick = function() {
					change(pageList[4][0], pageList[4][1], pageList[4][2], pageList[4][3], pageList[4][4]);
				}
			case 6:
				document.getElementById('brand6').onclick = function() {
					change(pageList[5][0], pageList[5][1], pageList[5][2], pageList[5][3], pageList[5][4]);
				}
			case 7:
				document.getElementById('brand7').onclick = function() {
					change(pageList[6][0], pageList[6][1], pageList[6][2], pageList[6][3], pageList[6][4]);
				}
			default:
		}

	}
	/*每次换页先设置页面不可见*/
	function setPaiDisplayNone() {
		for (i = 1; i < 8; i++) {
			var brand = "brand" + i; //根据i值生成div的id
			document.getElementById(brand).style.display = 'none'; //根据id设置div可见
		}
	}


	//引用搜狗语言合成
	function playAudio(text) {
		var audioPlayer = new Audio("https://fanyi.sogou.com/reventondc/synthesis?text=" + text +
			"&speed=1&lang=zh-CHS&from=translateweb&speaker=1");
		audioPlayer.play();
	}

	function addBrandInAn() {
		brand1.classList.add('brandInAn');
		brand2.classList.add('brandInAn');
		brand3.classList.add('brandInAn');
		brand4.classList.add('brandInAn');
		brand5.classList.add('brandInAn');
		brand6.classList.add('brandInAn');
		brand7.classList.add('brandInAn');
	}

	//end
}
/*音效BGEIN*/

function playSound(audio) {
	var borswer = window.navigator.userAgent.toLowerCase();
	if (borswer.indexOf("ie") >= 0) {
		//IE内核浏览器
		var strEmbed =
			'<embed name="embedPlay" src="../audio/' + audio + '" autostart="true" hidden="true" loop="false"></embed>';
		if ($("body").find("embed").length <= 0)
			$("body").append(strEmbed);
		var embed = document.embedPlay;

		//浏览器不支持 audion，则使用 embed 播放
		embed.volume = 100;
		embed.play();
	} else {
		//非IE内核浏览器
		var strAudio = "<audio id='audioPlay' src='../audio/" + audio + "' hidden='true'>";
		if ($("body").find("audio").length <= 0)
			$("body").append(strAudio);
		var audio = document.getElementById("audioPlay");
		audio.volume = 1;
		//浏览器支持 audio
		audio.play();
	}
}

function playSound2() {
	var borswer = window.navigator.userAgent.toLowerCase();
	if (borswer.indexOf("ie") >= 0) {
		//IE内核浏览器
		var strEmbed =
			'<embed name="embedPlay" src="../audio/1.wav" autostart="true" hidden="true" loop="false"></embed>';
		if ($("body").find("embed").length <= 0)
			$("body").append(strEmbed);
		var embed = document.embedPlay;

		//浏览器不支持 audion，则使用 embed 播放
		embed.volume = 100;
		embed.play();
	} else {
		//非IE内核浏览器
		var strAudio = "<audio id='audioPlay' src='../audio/1.wav' hidden='true'>";
		if ($("body").find("audio").length <= 0)
			$("body").append(strAudio);
		var audio = document.getElementById("audioPlay");
		audio.volume = 1;
		//浏览器支持 audio
		audio.play();
	}
}
/*音效END*/
