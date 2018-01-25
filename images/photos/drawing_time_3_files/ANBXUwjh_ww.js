if (self.CavalryLogger) { CavalryLogger.start_js(["ZycPl"]); }

__d("ODSJSErrorLogger",["BanzaiODS","ErrorUtils"],(function a(b,c,d,e,f,g){var h=false,i={init:function j(k){if(h)return;h=true;c("ErrorUtils").addListener(function(){c("BanzaiODS").bumpEntityKey("web_speed.jserror","hrm."+k)})}};f.exports=i}),null);