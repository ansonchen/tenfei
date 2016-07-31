!function(){
    
    document.getElementById('dropList').innerHTML =  indexCon[0].part5_site;
    
    var dropList = document.getElementById('dropList');
    if(!dropList) return false;
    
    dropList.onclick = function(e){
        
        if(e.target.tagName!=='A') return true;
        
        var dropText = document.getElementById('dropText');
        
        var gobtn = document.getElementById('gobtn');
        
        dropText.innerHTML = e.target.innerHTML;
        
        gobtn.href = e.target.href;
        
        return false;
        
    }
    
}()