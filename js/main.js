function Main()
{var theTimer=new UpTimer({ontick:onTimer});var perHour=25;var currency="$";var timeType="hour";var dots=3;exportRoot.using_mc.val_txt.text="Settings: $25 per Hour";exportRoot.theTimer.start_mc.addEventListener("mousedown",startHandler);exportRoot.theTimer.clear_mc.addEventListener("mousedown",clearHandler);exportRoot.using_mc.addEventListener("mousedown",settingsHandler);exportRoot.changeSettings.showDec.addEventListener("mousedown",dotsHandler);exportRoot.changeSettings.perTime_mc.addEventListener("mousedown",changeTimeHandler);exportRoot.changeSettings.changeCur_mc.changeCur_btn.addEventListener("mousedown",chnageCurHandler);exportRoot.changeSettings.changeCur_mc.dollar_btn.addEventListener("mousedown",useDollar);exportRoot.changeSettings.changeCur_mc.pound_btn.addEventListener("mousedown",usePound);exportRoot.changeSettings.changeCur_mc.euro_btn.addEventListener("mousedown",useEuro);exportRoot.changeSettings.changeCur_mc.yen_btn.addEventListener("mousedown",useYen);exportRoot.changeSettings.changeCur_mc.back_mc.visible=false;exportRoot.changeSettings.back_btn.addEventListener("mousedown",backHandler);exportRoot.os_btn.addEventListener("mousedown",function(){window.open('https://www.online-stopwatch.com','_blank');});$(document).on("blur","#perHr_txt",function()
{if(isNaN($("#perHr_txt").val()))
{perTime=25;}
else
{perTime=new Number($("#perHr_txt").val());}
exportRoot.using_mc.val_txt.text="Settings: "+currency+perTime.toString()+" per "+timeType.charAt(0).toUpperCase()+timeType.slice(1);});function changeTimeHandler(e)
{var currentFrame=exportRoot.changeSettings.perTime_mc.currentFrame;var amounts=["hour","minute","second"];if(currentFrame==exportRoot.changeSettings.perTime_mc.totalFrames-1)
{timeType=amounts[0];exportRoot.changeSettings.perTime_mc.gotoAndStop(0);}
else
{timeType=amounts[currentFrame+1];exportRoot.changeSettings.perTime_mc.gotoAndStop(currentFrame+1);}
exportRoot.using_mc.val_txt.text="Settings: "+currency+perTime.toString()+" per "+timeType.charAt(0).toUpperCase()+timeType.slice(1);}
function backHandler()
{exportRoot.changeSettings.x=-1000;exportRoot.theTimer.start_txt.text="Start";exportRoot.theTimer.start_mc.gotoAndStop(0);if(isNaN($("#perHr_txt").val()))
{perHour=25;}
else
{perHour=new Number($("#perHr_txt").val());}
exportRoot.using_mc.val_txt.text="Settings: "+currency+perHour.toString()+" per "+timeType.charAt(0).toUpperCase()+timeType.slice(1);exportRoot.theTimer.price_txt.text=currency+(0).toFixed(dots);}
function chnageCurHandler()
{exportRoot.changeSettings.changeCur_mc.back_mc.visible=true;}
function useDollar()
{exportRoot.changeSettings.changeCur_mc.curr_txt.text="$";currency="$";exportRoot.changeSettings.changeCur_mc.back_mc.visible=false;exportRoot.changeSettings.showDec.currType_mc.gotoAndStop(0);}
function usePound()
{exportRoot.changeSettings.changeCur_mc.curr_txt.text="£";currency="£";exportRoot.changeSettings.changeCur_mc.back_mc.visible=false;exportRoot.changeSettings.showDec.currType_mc.gotoAndStop(1);}
function useEuro()
{exportRoot.changeSettings.changeCur_mc.curr_txt.text="€";currency="€";exportRoot.changeSettings.changeCur_mc.back_mc.visible=false;exportRoot.changeSettings.showDec.currType_mc.gotoAndStop(2);}
function useYen()
{exportRoot.changeSettings.changeCur_mc.curr_txt.text="¥";currency="¥";exportRoot.changeSettings.changeCur_mc.back_mc.visible=false;exportRoot.changeSettings.showDec.currType_mc.gotoAndStop(3);}
function dotsHandler()
{var curretFrame=exportRoot.changeSettings.showDec.currentFrame;curretFrame=(curretFrame!=3)?curretFrame+1:0;exportRoot.changeSettings.showDec.gotoAndStop(curretFrame);dots=curretFrame;}
function clearHandler()
{theTimer.stop();exportRoot.theTimer.time_txt.text="00:00:00";exportRoot.theTimer.mill_txt.text="000";exportRoot.theTimer.price_txt.text=currency+(0).toFixed(dots);exportRoot.theTimer.start_txt.text="Start";exportRoot.theTimer.start_mc.gotoAndStop(0);}
function settingsHandler()
{exportRoot.changeSettings.x=0;theTimer.stop();exportRoot.theTimer.time_txt.text="00:00:00";exportRoot.theTimer.mill_txt.text="000";exportRoot.theTimer.price_txt.text=currency+(0).toFixed(dots);$("#perHr_txt").val(perHour);exportRoot.changeSettings.showDec.gotoAndStop(dots);}
function calculate(mill)
{var divider;if(timeType=="hour")
{divider=3600000;}
else if(timeType=="minute")
{divider=60000;}
else if(timeType=="second")
{divider=1000;}
var price=(perHour/divider)*mill;exportRoot.theTimer.price_txt.text=currency+price.toFixed(dots);}
function startHandler()
{if(exportRoot.theTimer.start_txt.text.toLowerCase()=="start")
{theTimer.start();exportRoot.theTimer.start_txt.text="Pause";exportRoot.theTimer.start_mc.gotoAndStop(1);}
else if(exportRoot.theTimer.start_txt.text.toLowerCase()=="pause")
{theTimer.pause();exportRoot.theTimer.start_mc.gotoAndStop(0);exportRoot.theTimer.start_txt.text="Continue";}
else if(exportRoot.theTimer.start_txt.text.toLowerCase()=="continue")
{theTimer.start();exportRoot.theTimer.start_mc.gotoAndStop(1);exportRoot.theTimer.start_txt.text="Pause";}}
function onTimer(e)
{var data=e.toString().formatedMilliseconds();exportRoot.theTimer.time_txt.text=data.hms;exportRoot.theTimer.mill_txt.text=data.ms;calculate(e);}}