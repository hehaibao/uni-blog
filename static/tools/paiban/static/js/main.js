﻿var winWidth=0;var winHeight=0;window_height=0;window_width=0;function findDimensions(){if(window.innerWidth){winWidth=window.innerWidth}else{if(document.body&&document.body.clientWidth){winWidth=document.body.clientWidth}}if(window.innerHeight){winHeight3=window.innerHeight}else{if(document.body&&document.body.clientHeight){winHeight3=document.body.clientHeight}}if(document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth){winHeight=document.body.clientHeight;winWidth=document.documentElement.clientWidth}winHeight_2=document.body.scrollHeight;bgheight=winHeight_2>winHeight3?winHeight_2:winHeight3;document.getElementById("background").style.top=0+"px";document.getElementById("background").style.left=0+"px";document.getElementById("background").style.width=winWidth+"px";document.getElementById("background").style.height=bgheight+"px";document.getElementById("window").style.height=window_height+"px";document.getElementById("window").style.width=window_width+"px";document.getElementById("window").style.top="20px";document.getElementById("window").style.left=(winWidth-window_width)/2+"px"}function closewindow(){window.onresize="";document.getElementById("engine").src="about:blank";document.getElementById("background").style.display="none";document.getElementById("window").style.display="none"}function jumpwindow(a){scroll(0,0);window.onresize=findDimensions;document.getElementById("background").style.display="";document.getElementById("window").style.display="";document.getElementById("engine").src=a}function changewindowsize(a,b){window_height=b;window_width=a;document.getElementById("engine").width=a-12;document.getElementById("engine").height=b-25;findDimensions();refIframe("loading")}function jumpwithoutwindow(a){document.getElementById("engine").src=a}function refIframe(a){switch(a){case"loading":document.getElementById("engine").style.visibility="hidden";document.getElementById("window").style.backgroundColor="#ffffff";break;case"sending":window.top.document.getElementById("engine").style.visibility="hidden";window.top.document.getElementById("window").style.backgroundColor="#ffffff";break;case"onload":document.getElementById("engine").style.visibility="visible";break}}document.write('<div style="position:absolute;background-color:black;z-index:1;visibility:visible;filter:alpha(opacity=50);-moz-opacity:.5;opacity:.5;" id="background" onclick="javascript://closewindow();" ></div>');document.write('<div style="width:100px;height:100px;top:-1050px;left:-500px;position:absolute;background-color:#ffffff;z-index:1;visibility:visible;border-width:5px;border-style:solid;border-color:#666;" id="window"><p align="right" style="font-size:12px;margin:3px 3px 3px 0;"><a href="javascript:void(0);" onclick="javascript:closewindow();" style="color:#000;text-decoration:none;font-weight:bold;font-family:宋体;">×</a></p><center><iframe id="engine" width="370" height="200" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="auto" src="about:blank" class="engineIframe" name="engine2" align="absmiddle" style="visibility:hidden;background-color:#ffffff;" onload="javascript:refIframe(\'onload\')"></iframe></center></div>');function KeyDown(){if(event.keyCode==113){event.keyCode=0;event.returnValue=false;run();return false}}function run(){gt.typeset_go();if(document.getElementById("selectall").checked){document.getElementById("textbox").select()}}function showfstStringSpan(){if(document.getElementById("fstStringSelect").value==0){document.getElementById("fstStringSpan").style.display=""}else{document.getElementById("fstStringSpan").style.display="none"}}function resize(){wH=window.innerHeight?window.innerHeight:document.body.clientHeight;wW=window.innerWidth?window.innerWidth:document.body.clientWidth;document.getElementById("textbox").style.height=wH-130>100?wH-130+"px":100;document.getElementById("textbox").style.height=wW<770&&wH-165>370?370+"px":document.getElementById("textbox").style.height}function showButtonImg(a){switch(a){case 1:document.getElementById("sbi_1").style.display="";document.getElementById("sbi_2").style.display="none";document.getElementById("sbi_0").style.display="none";break;case 2:document.getElementById("sbi_1").style.display="none";document.getElementById("sbi_2").style.display="";document.getElementById("sbi_0").style.display="none";break;case 3:document.getElementById("sbi_1").style.display="none";document.getElementById("sbi_2").style.display="none";document.getElementById("sbi_0").style.display="";break}};