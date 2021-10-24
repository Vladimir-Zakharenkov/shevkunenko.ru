// JavaScript Document

d=document;
var a='';
a+=';r='+escape(d.referrer);
js=10;

a+=';j='+navigator.javaEnabled();
js=11;

s=screen;
a+=';s='+s.width+'*'+s.height;
a+=';d='+(s.colorDepth?s.colorDepth:s.pixelDepth);
js=12;

js=13;

d.write('<img src="http://df.ce.b3.a1.top.mail.ru/counter'+'?id=2290320;js='+js+a+';rand='+Math.random()+'" height="1" width="1" alt="">');