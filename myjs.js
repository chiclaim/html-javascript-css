
/*
Note:
DOM 
	D:document  文档  一份文档就是一棵节点树，每个节点都是一个对象
	O:Object    对象
		JavaScript语言里对象可以分为三种类型：
		用户定义的对象(user-defined object) 有程序员自己创建的对象
		内建对象(native object) 内建在JavaScript语言里的对象，如Array、Math、Date等
		宿主对象(host object) 由浏览器提供的对象，如 window对象
	M:模型

	节点：元素[标签]节点、文本节点和属性节点
		标签节点就是html里的标签，如L<body>、<p>之类的标签。标签的名字就是元素的名字
		文本节点就是文本，如<p>标签包含"this is content" 文本，那么这个文本就是文本节点
		属性节点被放在起始标签里，如<p title="title">xxxx</p>，那么title="title"就是属性节点



CSS（层叠样式表）告诉浏览器应该如何显示一份文档的内容

如何引用CSS样式：
	1>直接在html里写
		<head>
			<style type="text/css">
				body {
					background-color: red;
				}
				p {
					margin-left: 20px
				}
			</style>
		<head>

	2>引入CSS文件
		<head>
		<link rel="stylesheet" type="text/css" href="mystyle.css">
		</head>


元素样式：
	body{
		color:yellow;
		background-color: black;
	}
	元素样式还有继承的功能，类似DOM，CSS也罢文档的内容视为一棵节点树，节点树上的各个元素将继承其父元素的样式属性，比如上面的我们为body元素定义了一些字体和背景颜色，这些颜色不仅作用于那些直接包含在<body>标签里的内容， 还将作用于嵌套在body元素内部的所有元素。

class样式（给带有class属性的元素设置样式）
	<p class"special">element p has special class</p>
	<h2 class="special">element h2 has special class</p>
	如下面的样式，就会对上面的两个标签起作用，内容都变成了斜体。
	.special{
		font-style: italic;
	}

	如果只想给h2标签设置斜体，p标签不受影响，可以这样设置样式：
	h2.special{
		font-style: italic;
	}
	如果即存在.special又存在h2.special，.special样式还是会影响到所有h2标签。


id样式 （给具有唯一id标识的元素设置样式）

<ul id="purchases">
	<li>支付宝</li>
	<li>微信</li>
	<li>信用卡</li>
</ul>

通过如下方式设置【#】：
#purchases{
	border: 1px solid white;
	background-color:  #333;
	color: #ccc;
	padding: 2em;
}
如果你想给id为purchases的节点的子节点设置单独设置样式，可以这样：
#purchases li{
	font-weight: bold;
}



DOM提供的五个方法：
1.getElementById(id);            
	这个方法返回一个对象，这个对象对应着document对象里一个独一无二的元素。【实际上，document中的每个元素都是一个对象。利用DOM提供的方法能得到任何一个对象】
	节点上设置id属性，id应该设置为独一无二的，但是你非得在html节点上加上两个相同的id，chrome上只会返回第一个。
	一般说来，用不着为文档里的每个元素都定义一个独一无二的对象。DOM提供了另一个方法来获取那些没有id属性的对象。

2.getElementsByTagName(tag);
	getElementsByTagName方法会一个对象数组，每个对象分别对应着文档里有着给定标签的一个元素。参数tag就是文档的标签，比如body、ul、ui等标签。调用可以参考demo里的getChildNodes()方法。
	getElementsByTagName还可以传递通配符如“*” ,它会返回文档里的所有元素节点，document.getElementsByTagName("*")。
	getElementsByTagName还可以被其他元素节点调用，比如
		var payWays = document.getElementById("purchases");
		var items = payWays.getElementsByTagName("*");
		因为在例子中id为purchases元素节点是ul，那么payWays.getElementsByTagName("*");返回的是ul里面有多少个ui节点。

3.getElementsByClassName(class);
	HTML5 DOM中新增的一个方法。这个方法能够通过class属性来访问元素。该方法返回的也是数组。
	如果你想输入多个className可以用空格隔开。如：document.getElementsByClassName("name1 name2")
	和getElementsByTagName(tag)一样，getElementsByClassName也可以被其他元素调用,但是不支持*通配符：
		var payWays = document.getElementById("purchases");
		var items = payWays.getElementsByClassName("sale");
	因为getElementsByClassName方法HTML5才出来的，老点的浏览器可能不支持，下面方法兼容老版本：
		function getElementsByClassName(node, classname){
			if(node.getElementsByClassName{//如果支持，使用新方法
				return node.getElementsByClassName(classname);
			} else{
				var results = new Array();
				var es = node.getElementsByTagName("*");
				for(var i=0;i<es.length;i++){
					if(es[i].className.index(classname)!=-1){
						results[results.length] = es[i];
					}
				}
			}
		}

4.getAttribute();
  setAttribute();
	这个两个方法都是用来获取和设置节点上的属性。不属于document对象。

5.childNodes获取节点下的所有类型的子元素，该属性返回已给数组
	文档里的节点不止元素节点、文本节点，属性节点三个类型的节点。文档里几乎每一样东西都是一个节点。甚至连空格和换行都会被解释为节点，而他们也会全部包含在childNodes属性返回的数组当中。
	上面我们通过getElementsByTagName("*")也可以获取某个节点下子元素, 注意getElementsByTagName("*")返回的不仅仅是直接子节点，如果子节点包含了节点，也会计算在内的。
	虽然childNodes返回所有类型的节点，我们可以通过nodeType获取节点的类型，但是该属性只返回整形。


6.nodeType 节点的类型	
	元素节点的nodeType属性值是1.
	属性节点的nodeType属性值是2.
	文本节点的nodeType属性值是3.
	也就这是三个节点有使用价值。

7.nodeValue 属性返回文本节点的值。
	比如要获取<p id="xxx">我是标签p里的值</p> 里面的文本的值，其实这里包含了两个节点，一个元素节点p和里面的文本节点，可以通过下面方式获取里面的文本：
	document.getElementById("xxx").childNodes[0].nodeValue; //document.getElementById("xxx").firstNode.nodeValue;
	nodeValue除了可以获取文本节点的值，还可以修改文本节点的值，如：
	p1.firstChild.nodeValue = "通过nodeValue设置新的值"

8.firstChild 和 lastChild 获取节点数组中首尾节点
	var e = document.getElementById("xxx");
	e.firstChild 相当于 e.childNodes[0]
	e.lastChild 相当于 e.childNodes[e.childNodes.length-1]


最佳实践
	JavaScript中的伪协议,如：
	<a href="javascript:openWindow()">openWindow</a>
	内嵌的事件处理函数
	<a href="#" onclick="openWindow();return false">openWindow</a>
	很遗憾这两种方式都很糟糕，原因有两点：
	1>因为他们都不能平稳退化，如果用户已经禁用了浏览器的JavaScript功能，这样的链接将毫无用处。
	2>href属性值不是合法的链接，可能会影响搜索引擎上的排名
	所以最好的方式就是href设置为合法的url，修改一下openwindow，把url作为参数传递进去而不是在方法里写死。
	<a href="http://www.baidu.com" onclick="openwindow('http://www.baidu.com');return false">openWindow</a>
	可以共用前面设置的url
	<a href="http://www.baidu.com" onclick="openwindow(this.getAtrribute('href'));return false">openWindow</a>
	看起来比较多，还可以简化下（this可以代表任何一种当前元素）：
	<a href="http://www.baidu.com" onclick="openwindow(this.href);return false">openWindow</a>

	JavaScript分离
		如何把JavaScript代码调用行为与HTML文档的结构和内容分离开，这样的话，网页就会健壮多。那么，能否使用下面的语句来实现点击事件(里面并没有onclick属性)：
		<a href="http://www.baidu.com" class="popup">open window</a>
		JavaScript语言不要求事件必须在HTML文档里处理，我们可以在外部JavaScript文件里把一个事件添加到HTML文档中的某个元素上，如下所示：
			element.event = action...
		如何获取element上面我们已经讲了很多操作方法比如：getElementById(id)、getElementsByTagName(tag)...
		那么，如何实现上面的点击效果呢？
		(1)获取html的a标签
		(2)遍历a标签数组
		(3)如果某个a标签的class属性等于popup，就表示需要给它设置处理点击事件的函数
		var as = document.getElementsByTagName("a");
		for(var i = 0; i < as.length; i++){
			if(as[i].getAttribute("class") == 'popup'){
				as[i].onclick = function(){
					openwindow(this.getAttribute("href"));
					return false;
				}
			}
		}

		测试的时候，发现并没有用。因为上面的js代码的第一行是：
		var as = document.getElementsByTagName("a");
		这行语句将在JavaScript文件被加载时立刻执行，如果引用外部js的代码<script>标签调用是在放在标签<head>里，它将在HTML文档之前加载到浏览器里；如果是</body>标签之前，就不能保证那个文件先结束加载(浏览器可能一次加载多个)。因为文档加载时文档可能不完整，所以模型也不完整。没有完整的DOM，getElementsByTagName函数就不能正常工作。
		所以必须让这些代码在HTML文档全部加载到浏览器之后马上开始执行。还在，HTML文档全部加载完毕时将触发一个事件 window.onload，当触发onload事件时，document对象已经存在了。所以把外部js改成如下形式就可以了：
		window.onload = preLinks;
		function preLinks(){
			var as = document.getElementsByTagName("a");
			for(var i = 0; i < as.length; i++){
				if(as[i].getAttribute("class") == 'popup'){
					as[i].onclick = function(){
						openwindow2(this.getAttribute("href"));
						return false;
					}
				}
			}
		}
		function openwindow2(url){
			window.open(url,"openwindow","width=600,height=600");
		}

		这样我们就成功的把行为和结构分离了

		问题又来了，如果浏览器没有启用JavaScript功能。这样的话可以确保那些“古老的”浏览器不会因为我们的脚本代码而出问题，这样做是为了让脚本有良好的向后兼容性。那些只支持一部分JavaScript功能但不支持DOM的浏览器认可访问我们的网页。
		(我觉得，现在浏览器都非常新了，而且没有不支持DOM的吧。哈哈，但是还是记录下这个知识点。可能这本书比较老，这也体现了这本书作者的思维严谨性，值得学习)
		判断某个js方法是否可用可以通过if(functionName)，如：
		if(!document.getElementById(id)) return false

		性能考虑：
			(1)尽量减少DOM的操作，比如document.getElementById(id)，回去搜索整个DOM树。所以如果能够复用操作尽量复用，减少DOM操作。
			(2)如果引入多个外部js文件，如果可以的话，把多个js合并到一个js文件，减少加载页面时发出请求的次数。
			(3)压缩脚本，所谓压缩脚本，指的是吧脚本文件不要的字节，如空格和注释等统统删除，达到压缩文件的目的。很多工具都可以替你来做这件事。有的压缩工具甚至会重写你的部分代码，使用更短的变量名，从而减少整体的文件大小。压缩后的代码版本虽然不容易看懂，却能大幅减少文件的大小。所以要保存两个版本，一个一个是工作副本(可以修改代码并添加注释)；另一个是精简副本，用于存放站点。通常为了与非精简版本区分开，最好在精简副本的文件名中加上min字样。如：<script src="scriptName.min.js">
			下面推荐几个代表性的压缩工具：
				1>JSMin  地址 http://crockford.com/javascript/jsmin
				2>雅虎的YUI Compressor 地址 https://developer.yahoo.com/yui/compressor/
				3>谷歌的Closure Compiler  地址 https://developers.google.com/closure/compiler/


DOM Core 和 HTML-DOM
	至此，我们在编写JavaScript代码时只用到了一下几个DOM方法：
	getElementById();
	getElementsByTagName();
	getAttribute();
	setAttribute();
	这些方法都是DOM Core的组成部分，它们并不专属于JavaScript，支持DOM的任何一种程序设计语言都可以使用它们。它们的用途也并非仅限于处理网页。
	在使用JS语言和DOM为HTML编写脚本的时候，还有很多属性可供选择，例如我们使用onclick，这是属于HTML-DOM。例如HTML-DOM提供了一个forms对象：document.getElementsByTagName("form")，可以简化为：document.forms。类似的还有element.getAttribute("src")简化为element.src，还有href属性等。所以你要能够看懂别人的HTML，明白这两种写法。


动态创建DOM节点
	上面我们讲了通过一系列的方法可以找到DOM的节点、改变节点的属性(element.setAttribute)。那么如何创建节点呢？
	1、使用传统方法：
		(1)document.write() 该方法必须放在body标签里面，且必须是script标签里。如：
		<body id="content">
			<script type="text/javascript">
				document.write("<p>document write something</p>");
			<//script>
		<//body>
		document.write的最大缺点是它违背了“行为应该和表现分离”的原则。所以尽量避免使用。

		(2)innerHTML属性
		现如今的浏览器几乎都支持该属性，但这个属性并不是W3C DOM标准的组成部分，但现在已经在HTML5的规范中。最早见于IE4浏览器中，
		该属性可以用来读、写某个给定元素的HTML内容。比如你可以把某个标签里的所有HTML代码全部替换成某个文本。但是这样就没有细节可言了，如果想要精准的控制还是必须使用DOM的方法和属性。

	2、使用DOM方法
		案例一：比如我们想在一个id为container的div节点添加一个p节点，p节点里有个文本“this dynamic node”。怎么实现？
			需要用到的DOM方法：createElement、appendChild、createTextNode方法。
			首先我们要创建一个element，可以通过document.createElement(nodeName);所以创建p节点很简单：
			var p = document.createElement("p");
			并且需要在p节点里添加一个文本，这就要用到创建文本节点方法createTextNode.
			vat txt = document.createTextNode("this dynamic node");
			此时txt节点还是个孤零零的节点，和p节点没有任何关系，需要通过appendChild为p节点添加txt节点。
			p.appendChild(txt);
			同样的，p节点也是孤零零的存在，和div节点没有任何关系，所以也需要appendChild(); 
			var container = document.getElementById("container");
			container.appendChild(p);

		案例二：在已有元素前插入一个新元素
			DOM提供了名为insertBefore(newElement,targetElement)方法。该方法将把一个新元素插入到一个现有元素的前面。调用该方法需要知道三件事：
			(1)新元素：你想插入的元素(newElement)
			(2)目标元素：你想把这个新元素插入到哪个元素(targetElement)之前。
			(3)父元素：目标元素的父元素(parentElement)。可以通过node.parentNode属性获得parentElement
			parentElement.inertBefore(newElement,targetElement)
			具体的例子可以参考下面的testInsertBefore方法，往input之前加入label

		案例三：在已有元素前插入一个新元素
			很遗憾，DOM并没有提供这个方法。所以需要我们自己实现。
			结合insertBefore方法和element.nextSibling属性可以实现。
			具体的例子可以参考下面的insertAfter方法。


CSS DOM
	我们在浏览器里看到的网页是由一下三层信息构成的共同体：
	结构体 (HTML)
	表示层 (CSS)
	行为层 (Javascript、DOM)

	style属性
		文档中的每个元素都是一个对象，每个对象又有着各种各样的属性。有些属性告诉我们元素节点树上的位置节点，比如，parentNode、nextSibling、previousSibling、childNodes、firstChild和lastChild这些属性，告诉我们文档中各节点之间关系。
		除此之外，文档的每个元素都有一个style属性，style属性包含着元素的样式，比如给p节点加上一个样式：
			<p id="localStyle" style="color:grey;font-family: 'Arial',sans-serif;"> this is local style</p>
		如果想要获取p节点的样式里的颜色怎么办？
		查询style属性将返回一个对象，而不是一个简单的字符串。样式都存放在这个style对象的属性里：
			element.style.propertyName
		所以获取里面的颜色很简单：
			p.style.color;
		需要注意的是在p标签里我们设置样式里的颜色是grey，如果我设置的是十六进制的值“#999999”，p.style.color返回的值是RGB格式rgb(153,153,153)
		但是获取font-family，要使用驼峰的方式，CSS是使用“-”来分隔两个单词的，我们通过DOM来获取有“-”的style属性必须使用去掉“-”然后第二个单词首字母大写。如CSS属性background-color对应的DOM属性为backgroundColor；CSS属性font-weight对应这DOM属性fontWeight；CSS属性margin-top-width对应着DOM属性marginTopWidth。
		获取font-family：
			p.style.fontFamily
		DOM可以获取style属性，同样可以修改样式：
			p.style.color = "black";
		以上我们是通过DOM来操作内嵌样式，但是这样的内嵌样式有很大的局限性。只有把CSS style属性插入到标记里(标签)，才可以用DOM style属性去查询那些信息：
			<p id="localStyle" style="color:grey;font-family: 'Arial',sans-serif;"> this is local style</p>
		这样不是使用CSS的好办法(表现信息与结构混杂在一起了)。更好的办法是用一个外部样式去设置样式：
			p#localStyle{
				color: grey;
				font-family: 'Arial',sans-serif;
			}
		把这段CSS代码放到一个单独的文件，然后在HTML引入即可：
			<link href="my.css" rel="stylesheet" type="text/css" />
		但是这样就无法通过DOM获取style里的属性了，因为p标签没有style属性节点了。

	className属性
		在前面的例子，我们通过DOM直接设置或修改样式，这种做法让“行为层”干“表示层”的活，并不是理想的工作方式。
		这里有一种简明的解决方案：与其使用DOM直接修改某个元素的样式，不同通过JavaScript代码去更新这个元素的class属性。
		比如我们已经有了下面的样式：
		.special{
			font-style: italic;
		}
		我们只需要给某个节点设置class属性为special即可。设置节点的className属性可以两种方式：
		element.setAttribute("class","special");
		element.className = "special";
		如果想要设置多个className，请空格隔开：
		element.className = "special special2";













	







*/
window.onload = preLinks;
function preLinks(){
	var as = document.getElementsByTagName("a");
	for(var i = 0; i < as.length; i++){
		if(as[i].getAttribute("class") == "popup"){
			as[i].onclick = function(){
				openwindow2(this.getAttribute("href"));
				return false;
			}
		}
	}
}


function openwindow2(url){
	window.open(url,"openwindow","width=600,height=600");
}

function setClassName(){
	var p = document.getElementById("localStyle");
	p.className = "special special2";
}

function getStyleColor(){
	var p = document.getElementById("localStyle");
	alert((typeof p.nodeName)+"-"+(typeof p.style));//string-object
	alert("颜色："+p.style.color);
	alert(p.style.fontFamily);
	//改变颜色
	p.style.color="black";
}


function testInsertBefore(){
	var div = document.getElementById("username");
	var label = document.createTextNode("请输入用户名：");
	div.parentNode.insertBefore(label,div);
}

function insertAfter(){

	var name = document.getElementById("username");
	var password = document.createElement("input");
	password.placeholder = "密码";
	var div = document.createElement("div");
	div.appendChild(password);
	name.parentNode.insertBefore(div,name.nextSibling);


}

function createDynamicNode(){
	var container = document.getElementById("container");
	var p = document.createElement("p");
	var txt = document.createTextNode("this dynamic node");
	p.appendChild(txt);
	container.appendChild(p);
}

function getElementBySameId(){
	var pElements = document.getElementById("p1");
	alert(pElements.innerHTML);
}

function test(){
	var content = document.getElementById("content");
	var title = content.getAttribute("flag");
	alert(title);
	content.setAttribute("flag","this is set title");
	alert(content.getAttribute("flag"));
}

function show(){
	alert("Test alert");
}

function getChildNodes(){
	//获取body标签的所有子节点
	//var element = document.getElementsByTagName("body")[0];
	//alert(element.childNodes.length);

	var payWays = document.getElementById("purchases");
	//获取purchases的子节点
	// var  items  = payWays.getElementsByTagName("*");
	// alert("支付方式："+items.length+"个");//5个

	alert("支付方式："+payWays.childNodes.length+"个");//7个
	for(var i=0;i<payWays.childNodes.length;i++){
		//alert(typeof payWays.childNodes[i]);
		alert(payWays.childNodes[i].nodeType);
	}

}


function testGetElementsByClassName(){
	var es = document.getElementsByClassName("special");
	for(var i=0;i<es.length;i++){
		//typeof es[i]; 输出类型
		alert(es[i].innerHTML);
	}
}

function getChildValue(){
	var p1 = document.getElementById("p1");
	//alert(p1.childNodes[0].nodeValue);
	alert(p1.firstChild.nodeValue);
}

function updateNodeValue () {
	var p1 = document.getElementById("p1");
	p1.firstChild.nodeValue = '新的文本值通过nodeValue设置的';
}

function openWindow(){
	window.open("http://www.baidu.com","new window","width=300,height=600");
}