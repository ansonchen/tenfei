/*
*工作宝页脚 ，含统计代码等
*Design by: Anson 75526201@qq.com
*Date:2015-7-23
*/
!function(){
    
    function isCanvasSupported(){
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    }
    
    if (!isCanvasSupported()){
        
        //alert('您的浏览器版本太旧，强烈建议升级。');
        location.href = 'ielt.html';
        return false;
        
    }
    
    setTimeout(function(){
       var d = document;
        //console.log('foot');        
       var foot = {

        obj: null,

        ev: function () {
            
            var footID = d.getElementById('footID');
            var hash = location.hash || "";
            if(hash!=""){
                    var atags = footID.getElementsByTagName('a');
                    for (var i = 0, j = atags.length; i < j; i++) {                
                        atags[i].href = atags[i].href + hash; 
                    }
            }
            
            var cnzz_protocol = (("https:" == d.location.protocol) ? " https://" : " http://");
            foot.obj.innerHTML ="<span id='cnzz_stat_icon_1255893828'></span>";
            var script = d.createElement("script");
            script.src = cnzz_protocol + "s11.cnzz.com/z_stat.php?id=1255893828&show=pic1";
            foot.obj.appendChild(script);
            
            

        },
        init: function () {

            var checknavID = 0,
                checkSetTime;
            if (!checknavID) {
                checkSetTime = setInterval(function () {
                    var navID = d.getElementById('other_JS');
                    if (navID) {
                        checknavID = 1;
                        clearInterval(checkSetTime);
                        foot.obj = navID;
                        foot.ev();
                    }
                }, 50);

            }

        }

    }

    foot.init();
        
        
        var _hmt = _hmt || [];
        (function() {
          var hm = d.createElement("script");
          hm.src = "//hm.baidu.com/hm.js?bc966ac5018babdf97f0a785ad9638ba";
          var s = d.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();


        //中国站长网统计代码
       // var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://"); document.write(unescape("%3Cspan id='cnzz_stat_icon_1255893828'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1255893828%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));

        
    },200);
   
}()