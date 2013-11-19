console.log("YouTube in VLC");
(function(){

function insertButton(){
	console.log("Inserting VLC Button");
	var URL = document.URL.replace(/^http/,'vlc');

	var btn = document.createElement('button');
	btn.className += " action-panel-trigger";
	btn.className += " yt-uix-button";
	btn.attributes['type'] = 'button';
	btn.attributes['title'] = URL;
	btn.addEventListener('click',function(e){window.location=URL},false);
	btn.innerHTML = '<span class="yt-uix-button-content">VLC</span>';

	var container = document.querySelector('#watch7-secondary-actions>span');
	container.appendChild(btn);
};

function domchange2(e){
	//console.log('DOMCHANGE');
	var rN = e.srcElement;
	if(! (rN && rN.tagName) )return;
	
	var rNs = rN.tagName.toLowerCase();
	if(rN.id.length>0) rNs += '#'+rN.id;
	
	switch(rNs){
		case 'span.ytp-time-current':
		case 'span.html5-progress-tooltip-timestamp':
			//console.log('-----(',rNs,')', e.type, e);
			break;
		case 'div#watch7-action-buttons':
		case 'div#movie_player':
			console.log('HERE?',e);
			break;
		case 'div#watch7-container':
			console.log('HERE?',rNs,e.type,e);
			insertButton();
		default:
			//console.log('-----(',rNs,')', e.type, e);
	};
};

function domchange(e){
	var s = e.srcElement;
	if( s && s.id && s.id=='watch7-container'){
		insertButton();
	}
};
window.addEventListener('load',insertButton,false);
document.addEventListener('DOMNodeInserted',domchange,false);

})();