window.onload = preLinks;
function preLinks(){
	var as = document.getElementsByTagName("a");
	for(var i = 0; i < as.length; i++){
		if(as[i].getAttribute("class") == "popup"){
			as[i].onclick = function(){
				openwindow2(this.getAttribute("href"));
				return false;
			}
		}
	}
};


function openwindow2(url){
	window.open(url,"openwindow","width=600,height=600");
};