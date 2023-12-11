function getQueryParam(e){var a=window.location.search.match(new RegExp("(\\?|&)"+e+"(\\[\\])?=([^&]*)"));return!!a&&a[3]};
const name=decodeURIComponent(getQueryParam("n").replace(/-|@|%40|\+|%20/g," "));
const blankname = 'Your Name';
const getSname = name.replace(/-|@|%40|\+|%20/g, " ");
null != getSname && NaN !== getSname && 0 != getSname.length || blankname;
const getYname = name.replace(/ |-|@|%40|\+|%20/g, "-");


function finalSname() {
  return null == getSname || NaN === getSname || 0 == getSname.length ? blankname : getSname
}

function finalYname() {
  const e = getYname;
  return null == e || NaN === e || 0 == e.length ? blankname.replace(/ |@|%40|\+|%20/g, "-") : e
}
null != getYname && NaN !== getYname && 0 != getYname.length || blankname;
const div1 = '<div class="test" style="font-family:SF Espresso Shack;"><div class="name"><span>',
  div2 = "</span></div></div>",
  singletext = finalSname().match(/.{1,1}/g).join("</span><span>", "</span>"),
  colortext = singletext.replace("<span> </span>", "<br /><br />");

$('#multiName').html( finalSname().match(/^[a-zA-Z0-9 %$#@!~`^&*()-_=+':;?.>,<']+$/)?div1+colortext+div2:'<h1 class="username simpleName"></h1>');
$('#heroName').html( '<figure><hero>'+finalSname()+'</hero><hero>'+finalSname()+'</hero><hero>'+finalSname()+'</hero></figure><div style="padding-top: 50px;padding-bottom:20px;"></div>' );
$('#name2023').html('<div class="newName"><ul class="name2023"><li class="name2023__layer name2023__layer--white">'+finalSname()+'</li><li class="name2023__layer name2023__layer--orange">'+finalSname()+'</li><li class="name2023__layer name2023__layer--red">'+finalSname()+'</li><li class="name2023__layer name2023__layer--violet">'+finalSname()+'</li><li class="name2023__layer name2023__layer--blue">'+finalSname()+'</li><li class="name2023__layer name2023__layer--green">'+finalSname()+'</li><li class="name2023__layer name2023__layer--yellow">'+finalSname()+'</li></ul></div>');
$('.simpleName').html( finalSname() );
$('#name2023').html('<div class="newName"><ul class="name2023"><li class="name2023__layer name2023__layer--white">'+finalSname()+'</li><li class="name2023__layer name2023__layer--orange">'+finalSname()+'</li><li class="name2023__layer name2023__layer--red">'+finalSname()+'</li><li class="name2023__layer name2023__layer--violet">'+finalSname()+'</li><li class="name2023__layer name2023__layer--blue">'+finalSname()+'</li><li class="name2023__layer name2023__layer--green">'+finalSname()+'</li><li class="name2023__layer name2023__layer--yellow">'+finalSname()+'</li></ul></div>');
