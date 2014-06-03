
//ブラウザ判定参考
var isWin9X = (navigator.appVersion.toLowerCase().indexOf('windows 98')+1);
var isIE = (navigator.appName.toLowerCase().indexOf('internet explorer')+1?1:0);
var isOpera = (navigator.userAgent.toLowerCase().indexOf('opera')+1?1:0);
if (isOpera) isIE = false;
var isSafari = (navigator.appVersion.toLowerCase().indexOf('safari')+1?1:0);


//スクロール取得オブジェクト
function getScrollPosition() {
	var obj = new Object();
	obj.x = document.documentElement.scrollLeft || document.body.scrollLeft;
	obj.y = document.documentElement.scrollTop || document.body.scrollTop;
	return obj;
}


//スクリーンサイズ取得オブジェクト
function getScreenSize() {
	var obj = new Object();
	if (!isSafari && !isOpera) {
		obj.x = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth;
		obj.y = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
	} else {
		obj.x = window.innerWidth;
		obj.y = window.innerHeight;
	}
	obj.mx = parseInt((obj.x)/2);
	obj.my = parseInt((obj.y)/2);
	return obj;
}


//ドキュメントサイズ取得オブジェクト
function getDocumentSize(){
	var obj=new Object();
	obj.h = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] );
	return obj;
}

//オブジェクトの相対位置取得オブジェクト
function getobj_position($target){
    var obj=new Object();
    obj.x=$target.offset().left;
    obj.y=$target.offset().top;
    obj.h=$target.outerHeight();
    obj.w=$target.outerWidth();
    return obj;
}


function posi_fix($target,ypos){
   	console.log($target.css('position'))
   	if($target.css('position')!='fixed'){
   		$target.css('position','fixed');
   		$target.css('top',ypos);
   	}
}
function posi_relative($target,ypos){
	$target.css('position','relative');
	$target.css('top',ypos);
}



//

$(function(){
	banner_move();
	$(window).on('scroll',banner_move)
})


//ページ下部固定
function banner_move(banner,banner_parent,footer){
	//設定
	var $base=$('#sub_content');//位置固定バナー
	var $target=$('#banner_group');//位置固定バナー親
	var $footer=$('#footer');//フッター
	var fotterY=getobj_position($footer).y;
	var scrollObj=getScrollPosition();
	var docObj=getDocumentSize();
	var winObj=getScreenSize();
	var baseObj=getobj_position($base);
	var targetObj=getobj_position($target);


	// console.log('on:'+-baseObj.y);
	// console.log("基準オブジェクトの位置x："+baseObj.x+":y"+baseObj.y);
	// console.log("ターゲットの幅："+targetObj.w+":高さ"+targetObj.h);
	// console.log("ターゲットの位置x："+targetObj.x+":y"+targetObj.y);
	console.log("スクロールの位置x："+scrollObj.x+":y"+scrollObj.y);
	console.log("ウィンドウのサイズ：x"+winObj.x+"y:"+winObj.y);
	console.log("ドキュメントのサイズ："+docObj.h+"footer位置:"+fotterY);

	if(winObj.x>768){

		//bannerがwindow高さより高い場合
		if(baseObj.y+targetObj.h>=winObj.y){
		if(baseObj.y+targetObj.h<=scrollObj.y+winObj.y){
			posi_fix($target,winObj.y-targetObj.h);
			console.log(winObj.y-targetObj.h);
			$("#main_content").css('background-color',"#000");
			if(scrollObj.y+winObj.y>=fotterY){
				posi_relative($target,fotterY-targetObj.h-baseObj.y);
			}
		}else{
			$("#main_content").css('background-color',"#F00");
			posi_relative($target,0);
			}
			/*bannerの高さがウィンドウの高さ以上ここまで*/
		}else{
			//bannerがwindow高さより低い場合
			if(baseObj.y<=scrollObj.y){
				$("#content").css('background-color',"#FFF");
				posi_fix($target,0)
			}else {
				$("#content").css('background-color',"#000");
				posi_relative($target,0);
			}
			/*bannerの高さがウィンドウの高さ以下ここまで*/
		}
	}else{
	/*幅が768px以下*/
	}


}
