var d = document;

var tabs = document.getElementById('J_tabs');

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
	
	
	console.log(index)
}


