

//スクロール取得オブジェクト


    var isWin9X = (navigator.appVersion.toLowerCase().indexOf('windows 98')+1);
    var isIE = (navigator.appName.toLowerCase().indexOf('internet explorer')+1?1:0);
    var isOpera = (navigator.userAgent.toLowerCase().indexOf('opera')+1?1:0);
    if (isOpera) isIE = false;
    var isSafari = (navigator.appVersion.toLowerCase().indexOf('safari')+1?1:0);


    function getScrollPosition() {
    var obj = new Object();
    obj.x = document.documentElement.scrollLeft || document.body.scrollLeft;
    obj.y = document.documentElement.scrollTop || document.body.scrollTop;
    return obj;
    }


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

    //オブジェクトの相対位置取得
    //右バナースクロール固定
    function getobj_position($target){
    	var obj=new Object();
    	obj.x=$target.offset().left;
    	obj.y=$target.offset().top;
    	obj.h=$target.outerHeight();
    	obj.w=$target.outerWidth();
    	return obj;
    }

    function posi_fixB($target,ypos){
		console.log($target.css('position'))
		if($target.css('position')!='fixed'){
			$target.css('position','fixed');
			$target.css('top',ypos);
		}
	}
	function posi_abs($target,ypos){
		if($target.css('position')!='relative'){
			$target.css('position','relative');
			$target.css('top',ypos);
		}
	}
	//右バナースクロール株固定





//

$(function(){




	/*トップ基準で固定
	function posi_fix($target,ypos){
		console.log($target.css('position'))
		if($target.css('position')!='fixed'){
			$target.css('position','fixed');
			$target.css('top',ypos);
		}
	}
	function posi_abs($target,ypos){
		if($target.css('position')!='absolute'){
			$target.css('position','absolute');
			$target.css('top',ypos);
		}
	}
	トップ基準で固定*/



	//scroll取得
	/*ページ上部固定
	$(window).on('scroll',function(){
		var $base=$('#subcontent');
		var $target=$('#banner_group');
		var $footer=$('#footer');
		var under_y=getobj_position($footer).y;
		var s_obj=getScrollPosition();

		var moto_obj=getobj_position($base);
		var target_obj=getobj_position($target);
		var sotai_x=moto_obj.x-target_obj.x;
		var sotai_y=moto_obj.y-target_obj.y;

		if(moto_obj.y<=s_obj.y+10){
			console.log('on:'+-moto_obj.y);
			console.log("幅："+target_obj.w+":高さ"+target_obj.h)
			posi_fix($target,10);
		}else {
			posi_abs($target,0);
		}

		if(s_obj.y>=under_y-target_obj.h-60){
			posi_abs($target,under_y-target_obj.h-moto_obj.y-60);
		}

		console.log(sotai_x+":"+sotai_y+"スクロール"+s_obj.y+"underY"+under_y);
	})
	ページ上部固定*/

	//ページ下部固定

	banner_move();
	$(window).on('scroll',banner_move)


	


})


//ページ下部固定
	function banner_move(){
		var $base=$('#sub_content');
		var $target=$('#banner_group');
		var $footer=$('#footer');
		var under_y=getobj_position($footer).y;
		var s_obj=getScrollPosition();
		//window
		var winObj=getScreenSize();

		var moto_obj=getobj_position($base);
		var target_obj=getobj_position($target);
		var sotai_x=moto_obj.x-target_obj.x;
		var sotai_y=moto_obj.y-target_obj.y;

		if(winObj.x>768){
			console.log('on');
			console.log("場所０0");

		if(moto_obj.y+target_obj.h>=s_obj.y+winObj.y){
			console.log('on:'+-moto_obj.y);
			console.log("幅："+target_obj.w+":高さ"+target_obj.h)
			console.log("サイズ："+winObj.x+":"+winObj.y)

			//$("#content").css('background-color',"#FFF");
			console.log("場所０１");
			posi_abs($target,0)
		}else {
			console.log('off:'+-moto_obj.y);
			//$("#content").css('background-color',"#000");
			posi_fixB($target,winObj.y-target_obj.h);
			console.log("場所０2");

		}

		//バナーの高さとウィンドウの高さの関係による？
		if(under_y<winObj.y+s_obj.y+30){
			if(s_obj.y>=under_y-target_obj.h){
				//$("#content").css('background-color',"#ff0");
				posi_abs($target,under_y-target_obj.h-moto_obj.y-60);
				console.log("場所０3");
			}
		}
		$("#content").css('background-color',"#FFF");
		console.log("場所０4");
		}else{
			console.log('off');
			console.log("場所０5");
			//$("#content").css('background-color',"#ff0");
		}

		//ページ下部固定

		//確認
		//console.log(sotai_x+":"+sotai_y+"スクロール"+s_obj.y+"underY"+under_y);

	}
