var data = [];
var dataStr = "1、火车站@\
<br><br>\
那一刻<br>\
好像都是被动，<br>\
包括离别。<br>\
<br><br>\
$2、乌镇@\
<br><br><br>\
你说的，<br>\
没说的，<br>\
我都会去做。<br>\
<br><br>\
$3、顾村公园@\
<br><br>\
相遇总是如此短暂，<br>\
离别却又感慨万千。<br>\
<br><br>\
$4、hidden man@\
<br><br>\
要是你们那个侠义江湖，<br>\
你们那个武林世界，<br>\
跟我们这个世间江湖，<br>\
我们这个凡人世界，<br>\
碰到一起了怎么办？<br>\
<br><br>\
$5、篮球@\
<br><br>\
无数次想抛弃，<br>\
却又捡起，<br>\
需要勇气。<br>\
<br><br>\
$6、攀岩@\
<br><br>\
放手，<br>\
下坠。<br>\
<br><br>\
$7、上海欢乐谷@\
<br><br>\
发泄的情绪，<br>\
随着那片尖叫，<br>\
远去。<br>\
<br><br>\
$8、青浦@\
<br><br>\
手举着，<br>\
头仰着，<br>\
注视着。<br>\
<br><br>\
";

var d = dataStr.split('$');
console.log(d);
for (var i = 0; i < d.length; i++) {
    var c = d[i].split('@');
    data.push({
        img: c[0].replace('、', ' ') + '.jpg',
        caption: c[0].split('、')[1],
        desc: c[1]
    });
};
