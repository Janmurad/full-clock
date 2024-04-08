String.prototype.replaceAt=function(index,character)
{return this.substr(0,index)+character+this.substr(index+character.length);};String.prototype.toHHMMSS=function()
{var seconds=parseInt(this,10);var hours=Math.floor(seconds/3600);var minutes=Math.floor((seconds-(hours*3600))/60);var seconds=seconds-(hours*3600)-(minutes*60);if(hours<10){hours="0"+hours;}
if(minutes<10){minutes="0"+minutes;}
if(seconds<10){seconds="0"+seconds;}
var time=hours+':'+minutes+':'+seconds;return time;};String.prototype.splice=function(idx,rem,str)
{return this.slice(0,idx)+str+this.slice(idx+Math.abs(rem));};String.prototype.zeroPad=function(max)
{return this.length<max?("0"+this).zeroPad(max):this;};String.prototype.formatedMilliseconds=function()
{var s=parseInt(this);var ms=s%1000;s=(s-ms)/1000;var secs=s%60;s=(s-secs)/60;var mins=s%60;var hrs=(s-mins)/60;return{hms:hrs.toString().zeroPad(2)+':'+mins.toString().zeroPad(2)+':'+secs.toString().zeroPad(2),ms:ms.toString().zeroPad(3),sec:secs};};String.prototype.timeToMill=function()
{var timerArr=this.split(":");var h=parseInt(timerArr[0]);var m=parseInt(timerArr[1]);var s=parseInt(timerArr[2]);var mill=(s+m*60+h*60*60)*1000;return mill;};