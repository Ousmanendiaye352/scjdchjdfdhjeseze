var analyticBricks=["birdOffice","eurosites"];function execAnalytics(type,options,toSlack){if(jQuery.inArray(_translationDomain,analyticBricks)!=-1){if(type!="page"&&type!="identify"&&type!="track"){return}if("dev"==_env||"benchmark"==_env){return}toSlack=typeof toSlack!=="undefined"?toSlack:0;if(options!==Object(options)){return}if(!("properties"in options)){options["properties"]={}}if(!("options"in options)){options["options"]={}}if(toSlack==0){options["options"]={integrations:{All:true,Slack:false}}}else{options["options"]={integrations:{All:false,Slack:true}}}var functionName="analytics"+type.charAt(0).toUpperCase()+type.slice(1);window[functionName](options)}}function analyticsIdentify(options){if(!("userId"in options)){return}analytics.identify(options["userId"],options["properties"],options["options"]);analytics.ready(function(){analytics.alias(options["userId"],analytics.user().anonymousId())})}function analyticsTrack(options){if(!("event"in options)){return}analytics.track(options["event"],options["properties"],options["options"])}function analyticsPage(options){if(!("name"in options)){return}if(!("category"in options)){options["category"]=null}analytics.page(options["category"],options["name"],options["properties"],options["options"])}function analyticsPageNoOption(){if("prod"!==_env){return}analytics.page()}