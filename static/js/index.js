function media(){
    plyr.setup({
        debug: !1,
            title: "宣传片",
            //iconUrl: "https://cdn.plyr.io/2.0.4/plyr.svg",
            tooltips: {controls: !0},
            captions: {
                defaultActive: !0
            },
        i18n: {
            restart:            "重播",
            rewind:             "倒回 {seektime} 秒",
            play:               "播放",
            pause:              "暂停",
            forward:            "向前 {seektime} 秒",
            buffered:           "缓冲",
            currentTime:        "当前时间",
            duration:           "长度",
            volume:             "音量",
            toggleMute:         "静音",
            toggleCaptions:     "字幕",
            toggleFullscreen:   "全屏切换"
        }
    });
}
function news(){
    var d = document;
	var imgList = d.getElementById('newsBox');
    var leftArr = d.getElementById('leftArr');
    var rightArr = d.getElementById('rightArr');
	var adCls =  function(e, t) {for (var a in t) e.style[a] = t[a]	};
	var bind = function(e, t, a) {
					if (e) {
						t = t.split(" ");
						for (var n in t) e.addEventListener(t[n], a, !1)
					}
			};
	var st ;

	function bindEve(e){


		var obj = e.target;

			if(st) clearTimeout(st);

			st = setTimeout(function(){


				var id = parseInt(obj.rel,10);
				var trf = "translateX(-" +  id*1392   + "px)";

				adCls(imgList, {
						transform: trf,
						OTransform: trf,
						msTransform: trf,
						MozTransform: trf,
					  WebkitTransform: trf

				});

			},50)


		
		//console.log(e.target.tagName)
	}
	bind(leftArr,"click", bindEve);
    bind(rightArr,"click", bindEve);

}

function init(){
        
    var d = document;
    //产品
    var newsBox = d.getElementById('newsBox');
  
    if(newsBox){
        
    var html = ''; 
     
    for(var i = 0,j = indexdb.length; i<j;i++ ){
        
    var picsrc = indexdb[i]['picturePath']!= '' ? indexdb[i]['picturePath'] : ('static/css/img/index/new'+(i+1)+'.jpg');
        html +='<a href="/Newsitem/?id=' + indexdb[i]['id_article'] +'"  class="item">';        
        html+='<img src="'+ picsrc +'">';
        html+='<em>'+ indexdb[i]['title_article'] +'</em>' + indexdb[i]['summary_article'];
        html+='</a>'
    }
    
   newsBox.innerHTML = html;
   html = null;
    
    }
    
    

    d.getElementById('productys').innerHTML =  indexCon[0].part1_site;
    d.getElementById('J_iconlist').innerHTML =  indexCon[0].part2_site;
    d.getElementById('demo_J').innerHTML =  indexCon[0].part3_site;
    d.getElementById('history_J').innerHTML =  indexCon[0].part4_site;
   // d.getElementById('dropList').innerHTML =  indexCon[0].part5_site;
   
    
    //产品
    var tabs = d.getElementById('J_tabs');

    var curid = '_1';

    tabs.onclick = function(e){

        var et = e.target;

        if(et.tagName!=='A') return false;

        var index = et.id.replace('J_link','');

        if(curid === index) return false;

        var oimg = d.getElementById('J_img'+curid),
            ocon = d.getElementById('J_con'+curid),
            olink = d.getElementById('J_link'+curid);

        oimg.className = 'img hide';
        ocon.className = "con hide";
        olink.className = "";

        curid = index;
        var img = d.getElementById('J_img'+curid),
            con = d.getElementById('J_con'+curid),
            link = d.getElementById('J_link'+curid);
        img.className = 'img';
        con.className = "con";
        link.className = "cur";

        

        console.log(index);
        return false;
    }
    
    //案例
    var J_ltabs = d.getElementById('J_ltabs');
    
    var ltabCurid = '_1';
    
    J_ltabs.onclick = function(e){

        var et = e.target;

        if(et.tagName!=='A') return false;

        var index = et.id.replace('J_linkl','');

        if(ltabCurid === index) return false;

        var ocon = d.getElementById('J_conl'+ltabCurid),
            olink = d.getElementById('J_linkl'+ltabCurid);

        ocon.className = "con fadeOut hide";
        olink.className = "";

        ltabCurid = index;
        var con = d.getElementById('J_conl'+ltabCurid),
            link = d.getElementById('J_linkl'+ltabCurid);
        con.className = "con fadeIn";
        link.className = "cur";

        

        console.log(index);
        return false;
    }
    

    //十年
    var J_time_tab = d.getElementById('J_time_tab'),
        J_tcon = d.getElementById('J_tcon'),
        J_hlink = d.getElementById('J_hlink'),
        J_hcu = d.getElementById('J_hcu'),
        J_time_tab_a = J_time_tab.getElementsByTagName('A'),
        J_tcon_ul = J_tcon.getElementsByTagName('UL');  
    
    for(var i = 0,j = J_time_tab_a.length;i<j;i++){
        J_time_tab_a[i].rel = i;
    }
    
    J_time_tab.curlink = J_hlink;
    J_time_tab.curCon = J_hcu;
    
    J_time_tab.onclick = function(e){

        var et = e.target;
        if(et.tagName=='I'){          
        et = et.parentNode;
       }
        if(et.tagName!=='A') return false;        
        if(et === J_time_tab.curlink) return false;
        
        
        var index = et.rel;

        J_time_tab.curlink.className = '';
        J_time_tab.curCon.className = 'hide';
        
        J_time_tab.curlink = et;
        J_time_tab.curCon = J_tcon_ul[index];
        
        J_time_tab.curlink.className = 'cur';
        J_time_tab.curCon.className = '';
        
        console.log(et.rel);
        return false;
    }
   
    
    //图标
    
     var J_iconlist = d.getElementById('J_iconlist'),         
         J_icondetail = d.getElementById('J_icondetail');
    
    var nowobj = null;
    
    J_iconlist.onclick = function(e){

        var et = e.target;

       if(et.tagName=='I'){          
        et = et.parentNode;
       }
        if(et.tagName!=='A') return false;

        if(nowobj === et) return false;
            
        if(nowobj){
            nowobj.className = '';
        }
            
         var html = '<h3>' + et.innerHTML + '</h3><p>' +  et.getAttribute('data-info') + '</p>';
        
        nowobj = et;
        nowobj.className = 'cur';  
        J_icondetail.className = 'detail zoomIn';
        J_icondetail.innerHTML = html;
            
        html = null;
        return false;
    }
                          
    
    if(J_iconlist){
        
        var wh = window.innerHeight;

        var bec = J_iconlist.getBoundingClientRect().top;

        if ( (wh -100) > bec  ) {


            J_iconlist.className = "cbox iconlist fadeIn";

        }
        else{

            window.onscroll = function () {

               var bec = J_iconlist.getBoundingClientRect().top;


                if ( (wh -100) > bec  ) {

                     J_iconlist.className = "cbox iconlist fadeIn";
                    window.onscroll = null;

                }

            }
        }
    }
    
    
    
    
    var drawR = {

        init: function () {

            var re = {};
            
            re.bn = 0;
                       

            re.setInter = function (id) {

                var pec = d.getElementById(id).getAttribute('name');
                re.end = pec;
                re.bc =  Math.ceil(pec/60);

                re.em = d.getElementById(id);

                if (!re.em) return false;

                re.time = setInterval(function () {

                    
                    re.bn += re.bc;

                    if (re.bn < re.end) {
                        re.em.innerHTML = re.bn ;

                    } else {

                        clearInterval(re.time);
                        re.em.innerHTML = pec ;

                    }

                }, 30);


            }

            return re;

        }






    }

    var num1 = d.getElementById('num1');
    if(num1){
    var wh = window.innerHeight;

    var bec = num1.getBoundingClientRect().top;
        
    if ( (wh -100) > bec  ) {

            var c1 = drawR.init();
            c1.setInter('num1');

            var c2 = drawR.init();
            c2.setInter('num2');

            var c3 = drawR.init();
            c3.setInter('num3');

            c1 = c2 = c3 = drawR = null;

    }
    else{
    
        window.onscroll = function () {

           var bec = num1.getBoundingClientRect().top;

          // var bt = document.documentElement.scrollTop || document.body.scrollTop;

          //  if ((bt + wh -100) > (bec + bt) ) {

            if ( (wh -100) > bec  ) {

                var c1 = drawR.init();
                c1.setInter('num1');

                var c2 = drawR.init();
                c2.setInter('num2');

                var c3 = drawR.init();
                c3.setInter('num3');

                c1 = c2 = c3 = drawR = null;

                window.onscroll = null;

            }

        }
    }
    }
}
media();
init();
news();



