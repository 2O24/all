function getQueryParam(a){var e=window.location.search.match(new RegExp("(\\?|&)"+a+"(\\[\\])?=([^&]*)"));return!!e&&e[3]}const urlName=getQueryParam("n"),hashName=window.location.hash.substring(1);function name2024(){return window.location.href.includes("?")?urlName:hashName}const name=decodeURIComponent(name2024()),blankname="Your Name",getSname=name.replace(/-|@|%40|\+|%20/g," ");null!=getSname&&NaN!==getSname&&getSname.length;const getYname=name.replace(/ |-|@|%40|\+|%20/g,"-");function finalSname(){return null==getSname||NaN===getSname||0==getSname.length?blankname:getSname}function finalYname(){const a=getYname;return null==a||NaN===a||0==a.length?blankname.replace(/ |@|%40|\+|%20/g,"-"):a}null!=getYname&&NaN!==getYname&&getYname.length;const div1='<div class="test" style="font-family:SF Espresso Shack;"><div class="name"><span>',div2="</span></div></div>",singletext=finalSname().match(/.{1,1}/g).join("</span><span>","</span>"),colortext=singletext.replace("<span> </span>","<br /><br />");$("#multiName").html(finalSname().match(/^[a-zA-Z0-9 %$#@!~`^&*()-_=+':;?.>,<']+$/)?div1+colortext+div2:'<h1 class="username simpleName"></h1>'),$("#heroName").html("<figure><hero>"+finalSname()+"</hero><hero>"+finalSname()+"</hero><hero>"+finalSname()+'</hero></figure><div style="padding-top: 50px;padding-bottom:20px;"></div>'),$("#name2023").html('<div class="newName"><ul class="name2023"><li class="name2023__layer name2023__layer--white">'+finalSname()+'</li><li class="name2023__layer name2023__layer--orange">'+finalSname()+'</li><li class="name2023__layer name2023__layer--red">'+finalSname()+'</li><li class="name2023__layer name2023__layer--violet">'+finalSname()+'</li><li class="name2023__layer name2023__layer--blue">'+finalSname()+'</li><li class="name2023__layer name2023__layer--green">'+finalSname()+'</li><li class="name2023__layer name2023__layer--yellow">'+finalSname()+"</li></ul></div>"),$(".simpleName").html(finalSname()),$("#name2023").html('<div class="newName"><ul class="name2023"><li class="name2023__layer name2023__layer--white">'+finalSname()+'</li><li class="name2023__layer name2023__layer--orange">'+finalSname()+'</li><li class="name2023__layer name2023__layer--red">'+finalSname()+'</li><li class="name2023__layer name2023__layer--violet">'+finalSname()+'</li><li class="name2023__layer name2023__layer--blue">'+finalSname()+'</li><li class="name2023__layer name2023__layer--green">'+finalSname()+'</li><li class="name2023__layer name2023__layer--yellow">'+finalSname()+"</li></ul></div>");
