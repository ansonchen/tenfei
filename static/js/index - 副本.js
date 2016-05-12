/*
*工作宝首页
*Design by: Anson 75526201@qq.com
*Date:2015-7-23
*/

!function () {
    
    //自动播放
    var autoScroll = {
        
            _width: 353,
            
            curpos: 1,
        
            addCls:  function(e, t) {
				for (var a in t) e.style[a] = t[a]
			 },
    
            init:function(){
            
                var scrollbox_JS = document.getElementById('scrollbox_JS');
                
                autoScroll.addCls(scrollbox_JS, {
                        WebkitTransition:"",
                        transition:"",
                        WebkitTransform: "translate3d(" + -autoScroll._width * autoScroll.curpos + "px,0px,0px)",
                        transform: "translate3d(" + -autoScroll._width * autoScroll.curpos + "px,0px,0px)"
				});
                
                
                autoScroll.curpos++;
                
                setInterval(function(){
                    
                        autoScroll.addCls(scrollbox_JS, {
                               WebkitTransition: "-webkit-transform 500ms ease-out",
                               transition: "transform 500ms ease-out",
                               WebkitTransform: "translate3d(" + -autoScroll._width * autoScroll.curpos + "px,0px,0px)",
                               transform: "translate3d(" + -autoScroll._width * autoScroll.curpos + "px,0px,0px)"
                        });
                    
                    autoScroll.curpos++;
                    
                    if(autoScroll.curpos==5){
                        
                        autoScroll.curpos=0;
                        
                        setTimeout(function(){
                         autoScroll.addCls(scrollbox_JS, {
                            
                            WebkitTransition:"",
                            transition:"",
                            WebkitTransform: "translate3d(0px,0px,0px)",
                            transform: "translate3d(0px,0px,0px)"
                         });
                            
                       },500);

                    }
                
                },3000);
            
            
            
            }
    
    }

    autoScroll.init();
    
    //画圆
    var drawR = {

        init: function () {

            var re = {};
            
            re.bn = 0;
            
            re.start = 1.5 * Math.PI;
            
            re.draw = function (canvas, start, endAngle, color) {

                var context = canvas.getContext('2d');
                var x = 97;
                var y = 97;
                var radius = 87;
                var startAngle = start;
                //var startAngle = 1.5 * Math.PI;
                var endAngle = (2 * 0.01 * endAngle - 0.5) * Math.PI;
                re.start = endAngle;
                var counterClockwise = false;
                context.beginPath();
                context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
                context.lineWidth = 20;
                // line color
                context.strokeStyle = color;
                context.stroke();


            }
            
            

            re.setInter = function (id, pec, color) {

                re.end = pec;

                re.canvas = document.getElementById(id);
                re.em = document.getElementById(id + "_em");

                if (!re.canvas) return false;

                re.time = setInterval(function () {

                    re.bn++;

                    if (re.bn < re.end) {
                        re.em.innerHTML = re.bn + "%";
                        re.draw(re.canvas, re.start, re.bn, color);


                    } else {

                        clearInterval(re.time);
                        re.em.innerHTML = pec + "%";
                        re.draw(re.canvas, 1.5 * Math.PI, pec, color);

                    }

                }, 20);


            }

            return re;

        }






    }

    window.onscroll = function () {

        var bt = document.documentElement.scrollTop || document.body.scrollTop;

        if (bt > 400) {


            var c1 = drawR.init();
            c1.setInter('myCanvas', 75, '#2ea7e0');

            var c2 = drawR.init();
            c2.setInter('myCanvas2', 80, '#e61673');

            var c3 = drawR.init();
            c3.setInter('myCanvas3', 55, '#f39800');

            c1 = c2 = c3 = drawR = null;

            window.onscroll = null;

        }

    }
    
    
    
    //自动播放
    var demoScroll = {
        
            _width: 280,
            
            curpos: 1,
        
            gotoTime:null,
        
            autoplay:null,
        
            autoTime:5000,
        
            minus: 0,
        
            addCls:  function(e, t) {
				for (var a in t) e.style[a] = t[a]
			 },
        
            moveElement:function(obj,final_x,interval,fn){
            
                    var elem = obj;
                    
                    if (elem.movement) {
                        clearTimeout(elem.movement);
                    }
                    if (!elem.style.left) {
                        elem.style.left = "0px";
                    }
                    
                    
                    
                    var xpos = parseInt(elem.style.left);                
                
                    if (xpos == final_x) {
                         fn && fn();    
                        return true;
                    }
                
                    if (xpos < final_x) {
                        var dist = Math.ceil((final_x - xpos)/10);
                        xpos = xpos + dist;
                    }
                    if (xpos > final_x) {
                        var dist = Math.ceil((xpos - final_x)/10);
                        xpos = xpos - dist;
                    }                

                    elem.style.left = xpos + "px";
                    elem.movement = setTimeout(function(){                    
                        demoScroll.moveElement(obj,final_x,interval,fn);
                    },interval);

            },
            

        
            play:function(scrollbox_JS,scrollText){
                
   
                var atgs = scrollbox_JS.getElementsByTagName('a');
                var changeImg  = document.getElementById('changeImg');       
                
                
                var movepx = demoScroll.minus ? -demoScroll._width * ( demoScroll.curpos-2) :  -demoScroll._width * ( demoScroll.curpos);
                changeImg.className = 'slidehide';
                scrollText.className = 'text slidehide';
                demoScroll.moveElement(scrollbox_JS,movepx,10,function(){
                
                    if(demoScroll.curpos > 0){
                    
                        atgs[demoScroll.curpos].className ='';
                        
                         
                    }
                        
                        if( demoScroll.minus){
                            if(demoScroll.curpos == 1){
                                demoScroll.curpos = atgs.length-3;
                                scrollbox_JS.style.left = (-demoScroll._width * (demoScroll.curpos-1)) + "px";
                            }else{
                                demoScroll.curpos--;
                            
                            }
                        }else{
                            if(demoScroll.curpos == (atgs.length-3)){
                                demoScroll.curpos = 1;
                                scrollbox_JS.style.left = 0 + "px";
                            }else{
                                demoScroll.curpos++;
                            }
                        }
                    
                    if(demoScroll.curpos>0){
                        atgs[demoScroll.curpos].className = 'curr';
                        changeImg.className = 'slideshow';
                        changeImg.src = atgs[demoScroll.curpos].getElementsByTagName('img')[0].src;
                        scrollText.className = 'text slideshow';
                        scrollText.innerHTML =  atgs[demoScroll.curpos].name;
                    }  

                });
                

                
                
                
                
            
            },
        
            goto:function(){
                
                (demoScroll.gotoTime) && clearTimeout(demoScroll.gotoTime);  
                
                demoScroll.gotoTime = setTimeout(function(){                   
                    
                    demoScroll.play(demoScroll.scrollObj,demoScroll.scrollText);
                    
                    (demoScroll.autoplay) && clearInterval(demoScroll.autoplay);
                    
                    demoScroll.autoplay = setInterval(function(){   
                        
                        demoScroll.play(demoScroll.scrollObj,demoScroll.scrollText);  
                        
                     },demoScroll.autoTime);
                    
                },200);
                
                
                
                
                
            },
            
            stop:function(){
                 (demoScroll.gotoTime) && clearTimeout(demoScroll.gotoTime);
                 (demoScroll.autoplay) && clearInterval(demoScroll.autoplay);
            },
        
            init:function(scrollobj,scrollText){
            
                var scrollbox_JS = scrollobj,atgs = scrollbox_JS.getElementsByTagName('a');
                
                demoScroll.scrollObj = scrollbox_JS;                
                demoScroll.scrollText = scrollText;

                
                demoScroll.autoplay = setInterval(function(){                    
                   demoScroll.play(demoScroll.scrollObj,demoScroll.scrollText);                
                },demoScroll.autoTime);
            
            
            
            }
    
    }

   

    
    var scrollPic = {
    
         isPreviousSibling : function(obj){
            while (obj.nodeType != 1){obj = obj.previousSibling;}
               return obj;
        },
    
        isNextSibling : function(obj){
            while (obj.nodeType != 1){obj = obj.nextSibling;}
           return obj;
        },
    
        init:function(){
        
            var d = document;
            var leftArr = d.getElementById('leftArr'),
                rightArr = d.getElementById('rightArr'),
                picZone = d.getElementById('picZone'),
                scrollcon = d.getElementById('scrollcon'),
                scrollText = d.getElementById('scrollText'),
                atgs = picZone.getElementsByTagName('a'),
                lng = atgs.length;
                
                demoScroll.init(picZone,scrollText);
            
            rightArr.onclick = function(){
                if(demoScroll.minus){
                    demoScroll.minus = 0;
                }
                
                demoScroll.goto();                
            
            }
            
            leftArr.onclick = function(){
                if(!demoScroll.minus){
                  demoScroll.minus = 1;
                }                  

               demoScroll.goto();
        
            }
            
            
            
            picZone.onclick  =function(e){
                
                switch(e.target.tagName){
                
                    case 'A':
                        var obj = e.target;
                        var arr = 'null';
                        
                        if(atgs[0] === obj){

                            arr = 'left';
                        }
                        
                        if(atgs[lng-1] === obj){
                            
                            arr = 'right';
                        }
                        
                        if(arr === 'null'){
                            
                                var prev = scrollPic.isPreviousSibling(obj.previousSibling);
                            
                                var next = scrollPic.isNextSibling(obj.nextSibling);

                                if(prev.className === 'curr'){
                                    arr = 'right';

                                }
                                if(next.className === 'curr'){                            
                                    arr = 'left';
                                    
                                }
                        }
                        
                        if(arr === 'left'){
                            demoScroll.minus = 1;
                            demoScroll.goto();
                        }
                        if(arr === 'right'){
                            demoScroll.minus = 0;
                            demoScroll.goto();
                        }
                        
                         
                        
                        break;
                    case 'IMG':
 
                         var obj = e.target.parentNode;
                            obj.click();
                        
                        break;
                
                
                
                
                }
            
              
            }
            
            
            scrollcon.onmouseover = function(){
                demoScroll.stop();
            }
            scrollcon.onmouseout = function(){

                 demoScroll.goto();
            }
            
        
        
        
        }
    
    
    }
	scrollPic.init();

    var reg  ={
        
            error:function(){
            
            
                 reg.mobile.className="shake";
                 setTimeout(function(){
                        reg.mobile.className="";
                    },1000)
            
            },
            
            
            isMobile:function(s)   {   
                    var   patrn=/^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;   
                    if (!patrn.exec(s))  return false;   
                    return   true;   
            },
		
    
            init:function(btnid,mobileid,formid){
                var btn =  document.getElementById(btnid);
                if(!btn) return false;
                
                this.btn = btn;
                
                this.mobile = document.getElementById(mobileid);
                
                this.btn.onclick = function(){
        
                    if(reg.mobile.value.length!=11){
                                            
                        reg.error();
                        
                    }else{ 
                        
                        reg.isMobile(reg.mobile.value) ?  document.getElementById(formid).submit() : reg.error();
                    }



                }

            
            }
        
    }
    
    reg.init('regBtn','mobile','reg');
	
	
	var reg2  ={
        
            error:function(){
            
            
                 reg2.mobile.className="shake";
                 setTimeout(function(){
                        reg2.mobile.className="";
                    },1000)
            
            },
            
            
            isMobile:function(s)   {   
                    var   patrn=/^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;   
                    if (!patrn.exec(s))  return false;   
                    return   true;   
            },
		
    
            init:function(btnid,mobileid,formid){
                var btn =  document.getElementById(btnid);
                if(!btn) return false;
                
                this.btn = btn;
                
                this.mobile = document.getElementById(mobileid);
                
                this.btn.onclick = function(){
        
                    if(reg2.mobile.value.length!=11){
                                            
                        reg2.error();
                        
                    }else{ 
                        
                        reg2.isMobile(reg2.mobile.value) ?  document.getElementById(formid).submit() : reg2.error();
                    }



                }

            
            }
        
    }
    
    reg2.init('regBtn2','mobile2','reg2');
	
    
	var d = document;
	var formEven = {
		
		sending: 0,
		sendForm: function (url) {
			var localTest = /^(?:file):/,
				xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function () {

				if (xmlhttp.readyState == 4 &&  xmlhttp.status == 200) {
					//   console.log(xmlhttp.responseText);     

					//d.getElementById('dialogCon').className="dialogCon suss";
					//d.getElementById('formZone').style.display="none";
					alert('表单提交成功，将有专人与您联系')
					d.getElementById("myForm").reset();
					formEven.sending = 0;

				}
			}


				xmlhttp.open("POST", url, true);
				var formData = new FormData(d.getElementById("myForm"));
				xmlhttp.send(formData);

		},
		

		
		reset:function(){
			
			d.getElementById("myForm").reset();
			//d.getElementById('dialogCon').className="dialogCon";
			//d.getElementById('formZone').style.display="block";
			d.getElementById('errmsg').style.display = 'none';
			
		},
		sendBtn:function(){
		
			var sumbitBtn  = d.getElementById('sumbitBtn');
			

			
			
			
			sumbitBtn.onclick = function(){

					var uname = d.getElementById('uname'),												
						mobile = d.getElementById('mobilex'),
						errmsg =  d.getElementById('errmsg');

					var pass = 0;
				
					if(!uname.value.length  
					   || !mobile.value.length 
					  ){
						
						pass = 1;
						
						errmsg.style.display = 'block';
					
					}
					
					console.log(pass)

					if(!pass){
						errmsg.style.display = 'none';
						console.log(1)
						
						if(!formEven.sending){
							formEven.sending = 1;
								formEven.sendForm('adminn/Api/Index/add_contact');
							}
					}
					//sendForm('adminn/Api/Index/add_contact');


				}

		
		
		
		},
		
		init:function(){
			this.
			//select().
			sendBtn();
		}
		
		
	
	
	
	
	
	}
	

	formEven.init();

}();


