/*
 *工作宝菜单
 *Design by: Anson 75526201@qq.com
 *Date:2015-7-23
 */
! function () {

    var d = document;
    var menu = {

        obj: null,

        ev: function () {
            var url = location.href;            
            var hash = location.hash;
            var fileName = url.replace(/.*\/(.*)/, "$1").replace(hash,'');
            var blackMenu = ['privatization.html', 'demo.html', 'news.html', 'help.html', 'active.html'];
            var blackfull = ['link.html', 'contact.html', 'service.html'];
            
            fileName = fileName == '' ? 'index.html' : fileName; 

            for (var k = 0; k < blackMenu.length; k++) {
                if (fileName === blackMenu[k]) {
                    menu.obj.className = 'black';
                    break;
                }
            }

            for (var k = 0; k < blackfull.length; k++) {
                if (fileName === blackfull[k]) {
                    menu.obj.className = 'blackfull';
                    break;
                }
            }

            var atags = menu.obj.getElementsByTagName('a');

            for (var i = 0, j = atags.length; i < j; i++) {
                atags[i].href = atags[i].href + hash; 
                if (fileName === atags[i].rel) {
                    atags[i].className = "cur";
                    //break;

                }

            }

        },
        init: function () {

            var checknavID = 0,
                checkSetTime;
            if (!checknavID) {
                checkSetTime = setInterval(function () {
                    var navID = d.getElementById('navID');
                    if (navID) {
                        checknavID = 1;
                        clearInterval(checkSetTime);
                        menu.obj = navID;
                        menu.ev();
                    }
                }, 50);

            }

        }





    }

    menu.init();

    var wx = {


        obj: null,

        ev: function () {
            
            var wxd_JS = d.getElementById('wxd_JS');
            var wxd_close_JS = d.getElementById('wxd_close_JS');
            
            var qqGroup = d.getElementById('qqGroup');
            var qqg_JS = d.getElementById('qqg_JS');
            var qqg_close_JS = d.getElementById('qqg_close_JS');
            
            wx.obj.onclick = function () {
                wxd_JS.style.display = 'block';
                wxd_JS.className = "wxd fadeIn";
                return false;

            }
            
            wxd_close_JS.onclick = function () {
                wxd_JS.className = "wxd fadeOut";
                setTimeout(function(){
                    wxd_JS.style.display = 'none';
                },500);                
                return false;

            }
            
            qqGroup.onclick = function () {
                qqg_JS.style.display = 'block';
                qqg_JS.className = "wxd nobg fadeIn";
                return false;

            }
            qqg_close_JS.onclick = function () {
                qqg_JS.className = "wxd nobg fadeOut";
                setTimeout(function(){
                    qqg_JS.style.display = 'none';
                },500);                
                return false;

            }
            
            
            

        },
        init: function () {

            var checknavID = 0,
                checkSetTime;
            if (!checknavID) {
                checkSetTime = setInterval(function () {
                    var wxd_a_JS = d.getElementById('wxd_a_JS');
                    if (wxd_a_JS) {
                        checknavID = 1;
                        clearInterval(checkSetTime);
                        wx.obj = wxd_a_JS;
                        wx.ev();
                    }
                }, 50);

            }

        }





    }
    wx.init();


    function uaredirect(f) {

        try {
            if (d.getElementById("mobilePage") != null) {
                return
            }

            var b = false;
            if (arguments[1]) {
                var e = window.location.host;
                var a = window.location.href;
                if (isSubdomain(arguments[1], e) == 1) {
                    f = f + "/#m/" + a;
                    b = true
                } else {
                    if (isSubdomain(arguments[1], e) == 2) {
                        f = f + "/#m/" + a;
                        b = true
                    } else {
                        f = a;
                        b = false
                    }
                }
            } else {
                b = true
            }
            if (b) {
                var c = window.location.hash;
                if (!c.match("fromapp")) {
                    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
                        location.replace(f)
                    }
                }
            }
        } catch (d) {}
    }

    function isSubdomain(c, d) {
        this.getdomain = function (f) {
            var e = f.indexOf("://");
            if (e > 0) {
                var h = f.substr(e + 3)
            } else {
                var h = f
            }
            var g = /^www\./;
            if (g.test(h)) {
                h = h.substr(4)
            }
            return h
        };
        if (c == d) {
            return 1
        } else {
            var c = this.getdomain(c);
            var b = this.getdomain(d);
            if (c == b) {
                return 1
            } else {
                c = c.replace(".", "\\.");
                var a = new RegExp("\\." + c + "$");
                if (b.match(a)) {
                    return 2
                } else {
                    return 0
                }
            }
        }
    };

    uaredirect("/mobile");

}()