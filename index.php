<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<link rel="shortcut icon" href="favicon.ico" />
<script type="text/javascript" src="js/jquery.js"></script>
<!--[if lt IE 9]>
<script type="text/javascript" src="js/html5.js"></script>
<![endif]-->
<!--[if IE 6 ]>
<script type="text/javascript" src="js/uupaa-suketrans.js"></script>
<![endif]-->
<meta name="keywords" content="" />
<meta name="description" content="" />
<title>サンプル</title>
<script src="demo/build/mediaelement-and-player.min.js"></script>
<link rel="stylesheet" href="demo/build/mediaelementplayer.min.css" />
<link rel="stylesheet" type="text/css" href="css/common.css"  />
<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>

</head>
<body>
<div id="header">
  <div id="header_center">
    <span id="logo">YAGO</span>
  </div>
</div>

<div class="w_center">
<?php if(!empty($txt)): ?>
  <div class="attention" >
    <?php echo $txt; ?>
  </div>
<?php endif; ?>
</div>

<div id="container">
  <div class="main_content">

    <div class="title_group">
    <div class="title">制作物タイトル</div>
    <div class="category"><span class="catbtn cat01">動画</span><span class="catbtn02 cat0201">医師向け</span></div>
    </div>

    <div class="movie01">
      <div class="player_wrap">
        <!-- simple single file method -->
        <video width="640" height="480" src="demo/media/fancl/FANCL_HD1260.mp4" type="video/mp4" id="player1" controls="controls" preload="none">
        </video>
        <span id="player1-mode"></span>
      </div><!--//player_wrap-->
    </div><!--//movie01-->
    <?php if($obj['detail_flg']==1): ?>
    <div class="detail">

        <div class="detail_left">
          <div class="text">
            説明テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>


        </div><!--//detail_left-->

      </div><!--//detail-->
      <div class="other">
          <p>その他<br>
            説明などテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>

    <?php endif; ?>
  </div><!--//main_content-->
</div><!--//container-->

<div id="footer" class="clearfix">
<p id="copy">(C) yago</p>
</div>

<script>
$('audio,video').mediaelementplayer({
	//success: function(player, node) {
		//$('#' + node.id + '-mode').html('mode: ' + player.pluginType);
	//}
});
</script>

</div><!-- end contener  -->
</body>
</html>
