/*牌子动画BEGIN*/
var detailsPage = RegExp(/details/); //正则表达
if (detailsPage.test(filename)) {
	brand1.addEventListener("mouseover", brandMouseover1.bind(this, 'brand1'));
	brand2.addEventListener("mouseover", brandMouseover2.bind(this, 'brand2'));
	brand3.addEventListener("mouseover", brandMouseover1.bind(this, 'brand3'));
	brand4.addEventListener("mouseover", brandMouseover2.bind(this, 'brand4'));
	brand5.addEventListener("mouseover", brandMouseover1.bind(this, 'brand5'));
	brand6.addEventListener("mouseover", brandMouseover2.bind(this, 'brand6'));
	brand7.addEventListener("mouseover", brandMouseover1.bind(this, 'brand7'));
	}

function brandMouseover1(brand) {
	const brandDiv = document.getElementById(brand);
	brandDiv.classList.remove('brandInAn');
	brandDiv.classList.add('brandMouseover1');
}

function brandMouseover2(brand) {
	const brandDiv = document.getElementById(brand);
	brandDiv.classList.remove('brandInAn');
	brandDiv.classList.add('brandMouseover2');
}
/*牌子动画END*/
if (filename[filename.length - 1] == 'gallery.html') {
	RadPaiaddListener();
	RadPaiIn()
}
function RadPaiaddListener() {
	for (i = 1; i < 61; i++) {
		var CLpaizi = "CLpaizi" + i; //根据i值生成div的id
		const CLpaiziDiv = document.getElementById(CLpaizi);
		CLpaiziDiv.addEventListener("mouseover", setRadPaiMouseOver.bind(this,CLpaiziDiv));//根据id设置div不可见
	}
}

function setRadPaiMouseOver(CLpaiziDiv) {
	CLpaiziDiv.classList.remove('ClInAn');
	CLpaiziDiv.classList.add('CLpaiziAn');
	
}

function RadPaiIn() {
	for (i = 1; i < 61; i++) {
		var CLpaizi = "CLpaizi" + i; //根据i值生成div的id
		setRadPaiIn(CLpaizi);
	}
}

function setRadPaiIn(CLpaizi) {
	const CLpaiziDiv = document.getElementById(CLpaizi);
	CLpaiziDiv.classList.add('ClInAn');
}