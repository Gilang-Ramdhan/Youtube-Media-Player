<html>
    <head>
        <title>hihihi</title>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta charset="UTF-8">
        <script src="jquery.min.js"></script>
    </head>
    <body>
        
        <div class="upload">

        <input class="change-video" type="file">
            Change Video        

        </div>

        <div class="container active">
            <div class="container-left active">
               <div class="videobox active">
                       <video src="file:///E:/Video/Tutorial/%23TANYAPADIKA%20EP005.mp4" id="video" onloadedmetadata="replace()"></video>
                   <div id="videocover">
                       <div id="btn-hover">
                           
                           <div id="videobtn-container">
                               <div id="videobtn-left">
                                   <a href="#" class="icon-container"><img class="icon-img" src="icon/YTB-Play.png" style="padding:2px;padding-top:0px;padding-bottom:0px;"></a>
                                   <a href="#" class="icon-container"><img class="icon-img" src="icon/YTB-Skip.png" style="padding:2px;"></a>
                                   <a href="#" id="icon-sound" ><img class="icon-img" src="icon/YTB-SoundFull.png" stlye="float:left;"></a>
                                   <a id="icon-duration">00:00</a>
                               </div>
                               <div id="videobtn-right">
                                   <a href="#" class="icon-container"><img class="icon-img" src="icon/YTB-FullScreen.png" style="padding:0px;"></a>
                               </div>
                           </div>
   
                           <a href="#" id="duration"><div id="timeline"></div><div id="slider"></div></a>
                       </div>
   
                   </div>
               </div>
            </div>
        </div>

        <script src="script.js"></script>
    </body>
</html>