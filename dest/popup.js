function addLoadEvent(n){var e=window.onload;"function"!=typeof e?window.onload=n:window.onload=function(){e(),n()}}function updatePopup(){button.className=enableSwitch?"":"disabled",document.getElementById("enableVal").innerHTML=enableSwitch?"已":"未",chrome.browserAction.setIcon({path:"handian48"+(enableSwitch?"":"-disabled")+".png"},function(){})}function toggle(){enableSwitch=!enableSwitch,chrome.storage.sync.set({enableSwitch:enableSwitch},function(){}),updatePopup()}function init(){button=document.getElementById("enableBtn"),button.onclick=toggle,chrome.storage.sync.get("enableSwitch",function(n){n&&(enableSwitch=n.enableSwitch),updatePopup()})}var enableSwitch=!0,button;addLoadEvent(init);