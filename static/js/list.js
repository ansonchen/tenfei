function addname(id,aname){
 var d= document,
     objid = d.getElementById(id);    
    
    if(objid && objid.value!=''){
        

       d.getElementById( aname + objid.value).className = 'cur';
        
    }
    

}

addname('xpidHide','type_');