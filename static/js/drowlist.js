! function () {

    function bind(elem, ev, callback) {
        if (document.all) {
            elem.attachEvent("on" + ev, callback);
        } else {
            elem.addEventListener(ev, callback, false);
        }
    }

    function unbind(elem, ev, callback) {
        if (typeof (callback) == "function") {
            if (document.all) {
                elem.detachEvent("on" + ev, callback);
            } else {
                elem.removeEventListener(ev, callback, false);
            }
        } else {
            if (document.all) {
                elem.detachEvent("on" + ev);
            } else {
                elem.removeEventListener(ev, false);
            }
        }
    }

    function hover(elem, overCallback, outCallback) { 
        var isHover = false; 
        var preOvTime = new Date().getTime(); 
        function over(e) {
            var curOvTime = new Date().getTime();
            isHover = true; 
            if (curOvTime - preOvTime > 10) { 
                overCallback(e, elem);
            }
            preOvTime = curOvTime;
        }
        function out(e) {
            var curOvTime = new Date().getTime();
            preOvTime = curOvTime;
            isHover = false;
            setTimeout(function () {
                if (!isHover) {
                    outCallback(e, elem);
                }
            }, 10);
        }
        bind(elem, "mouseover", over);
        bind(elem, "mouseout", out);
    };
    
    var dropList = document.getElementById('dropList');
    if (!dropList) return false;


    dropList.innerHTML = indexCon[0].part5_site;

    dropList.onclick = function (e) {

        if (e.target.tagName !== 'A') return true;

        var dropText = document.getElementById('dropText');

        var gobtn = document.getElementById('gobtn');

        dropText.innerHTML = e.target.innerHTML;

        gobtn.href = e.target.href;

        return false;

    }



    hover(dropList, function () {}, function () {
        if (dropList.scrollTop) {
            setTimeout(function () {
                dropList.scrollTop = 0;
            }, 10)
        }

    })


}()
