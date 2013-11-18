console.log("YouTube in VLC");
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