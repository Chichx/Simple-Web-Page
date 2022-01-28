document.addEventListener('contextmenu',event=>event.preventDefault());document.onkeydown=function(e){if(event.keyCode==123){audio.volume=0.05
saoModal("What the fuck?","Did you just try to open the developer tools?","Idiot.","Atleast you're not in denial about it, I guess.")
return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0)){audio.volume=0.05
saoModal("What the fuck?","Did you just try to open the developer tools?","Idiot.","Atleast you're not in denial about it, I guess.")
return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='C'.charCodeAt(0)){audio.volume=0.05
saoModal("What the fuck?","Did you just try to open the developer tools?","Idiot.","Atleast you're not in denial about it, I guess.")
return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0)){audio.volume=0.05
saoModal("What the fuck?","Did you just try to open the developer tools?","Idiot.","Atleast you're not in denial about it, I guess.")
return false;}
if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0)){audio.volume=0.05
saoModal("What the fuck?","Did you just try to open the developer tools?","Idiot.","Atleast you're not in denial about it, I guess.")
return false;}}
String.prototype.toHHMMSS=function(){var sec_num=parseInt(this,10);var hours=Math.floor(sec_num/3600);var minutes=Math.floor((sec_num-(hours*3600))/60);var seconds=sec_num-(hours*3600)-(minutes*60);if(hours<10){hours="0"+hours;}
if(minutes<10){minutes="0"+minutes;}
if(seconds<10){seconds="0"+seconds;}
if(hours==="00")return minutes+':'+seconds;return hours+':'+minutes+':'+seconds;}
window.addEventListener('DOMContentLoaded',async(event)=>{const req=await fetch('https://api.lanyard.rest/v1/users/852683595378196480');const json=await req.json();const statusText=document.getElementById("status");const spotText=document.getElementById("spot");const av=document.getElementById("image");const statusIcon=document.getElementById("iconStatus");const status_colors={"ONLINE":"#43b581","DND":"#f04747","IDLE":"#faa61a","OFFLINE":"#303030"}
if(json.success!==true||!json.data)return;av.src=`https://cdn.discordapp.com/avatars/852683595378196480/${json.data.discord_user.avatar}?size=512`
if(json.data.discord_status==="dnd"){statusText.innerHTML=`currently online (do not disturb)`}else if(json.data.discord_status==="online"){statusText.innerHTML=`currently online (active)`}else if(json.data.discord_status==="idle"){statusText.innerHTML=`currently AFK`}else{statusText.innerHTML=`currently offline`}
if(json.data.listening_to_spotify===true){spotText.innerHTML=`listening to ${json.data.spotify.artist} - ${json.data.spotify.song}`};if(json.data.activities[0]){let activity=json.data.activities[0];if(activity.name==="Spotify"){activity=json.data.activities[1];}
if(activity.timestamps.start){let start=new Date(activity.timestamps.start)
let end=Date.now()
let seconds=(end-start)/1000
statusText.innerHTML=`playing ${activity.name} for ${seconds.toString().toHHMMSS()}`
setInterval(()=>{let end=Date.now()
let seconds=(end-start)/1000
statusText.innerHTML=`playing ${activity.name} for ${seconds.toString().toHHMMSS()}`},1000)
return;}
statusText.innerHTML=`playing ${activity.name}`}});var x=0;var titleText=["chicho","chicho|","chich|","chic|","chi|","ch|","c|","|","&#65279;","|","c|","ch|","chi|","chic|","chich","chicho|","chicho","chicho|","chicho","chicho|","chicho","chicho|","chicho","chicho|"];function loop(){document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length];}
setInterval(()=>{loop()},600)