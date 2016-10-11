## H系列标签(Header 1~Header 6)

作用: 用于给文本添加标题语义
格式:
`<h1>xxxxxx</h1>`
注意点:
    H标签是用来给文本添加标题语义的, 而不是用来修改文本的样式的
    H标签一共有6个, 从H1~H6, 最多就只能到6, 超过6则无效
    被H系列标签包裹的内容会独占一行
    在H系列的标签中, H1最大, H6最小
    在企业开发中, 一定要慎用H系列的标签, 特别是H1标签. 在企业开发中一般情况下一个界面中只能出现一个H1标签(和SEO有关)

## P标签(Paragraph)
作用:
    告诉浏览器哪些文字是一个段落
格式:
`<p>xxxxxxxx</p>`
注意点:
    在浏览器中会单独占一行

## Hr标签(Horizontal Rule)
作用:
    在浏览器上显示一条分割线
格式:
`<hr />`
注意点:
    在浏览器中会单独占一行
    由于hr标签是用来修改样式的, 所以不推荐使用. 今后开发中添加水平线一般都使用CSS盒子来做


## img标签(image)
作用: 在网页上插入一张图片
格式: `<img src="图片路径" />`
标签的属性: 写在标签中K=”V”这种格式的文本我们称之为标签属性

| 属性名称 | 作用 |
| :------: | :------: |
| src(source) | 告诉浏览器需要插入的图片路径, 以便于浏览器到该路径下找到需要插入的图片 |
| alt(alternate) | 规定图像的替代文本, 只有在src指定的路径下找不到图片,才会显示alt指定的文本 |
| title | 悬停文本(介绍这张图片, 只有在鼠标移动到图片上时才会显示) |
| height | 设置图片显示的高度 |
| width |设置图片显示的宽度 |

注意点:
    img标签添加的图片默认不是占一整行空间
    如果想让图片等比拉伸, 只写高度或者宽度即可


## br标签(Break)
作用: 让内容换行
格式: `<br/>`
注意点:br的意思是不另起一个段落进行换行, 而网页中99.99%需要换行时都是因为另起了一个段落, 所以应该用p来做


## a标签(anchor)

格式: `<a href="http://blog.csdn.net/johnny901114">Chiclaim的博客</a>`
作用: 用于从一个页面链接到另一个页面
注意事项:

在a标签之间一定要写上文字, 如果没有, 那么在页面上找不到这个标签
a标签也叫做超级链接或超链接

### a标签的属性
| 属性名称 | 作用 |
| :------: | :------: |
| href(hypertext reference)	| 指定跳转的目标地址 |
| target | 告诉浏览器是否保留原始界面, _blank保留, _self不保留 |
| title | 悬停文本(介绍这个链接, 只有在鼠标移动到超链接上时才会显示) |

### base标签和a标签结合使用
如果每个a标签都想在新页面中打开,那么逐个设置a标签的target属性比较麻烦, 这时我们可以使用base和a标签结合的方式,一次性设置有a标签都在新页面中打开
格式: `<base target="_blank" />`
注意事项:
base必须嵌套在head标签里面
如果标签上指定了target,base中也指定了target,那么会按照标签上指定的来执行

### a标签其它用法
假链接(本质是跳转到当前页面)
格式: `<a href="#">江哥博客</a>`
格式: `<a href="javascript:">江哥博客</a>`
跳转到当前页面指定位置(锚点链接)
2.1.格式: `<a href="#location">跳转到指定位置</a>`
2.2.在页面的指定位置给任意标签添加一个id属性
例如 `<p id="location">这个是目标</p>`

### 跳转到指定页面的指定位置
格式: `<a href="01-锚点链接.html#location">跳转到指定位置</a>`
只需要在01-锚点链接.html页面添加一个id位置即可
下载(极力不推荐使用)
例如 `<a href="girl.zip">下载福利资源<a/>`



## 列表标签

### 无序列表(unordered list)
作用: 给一堆内容添加无序列表语义(一个没有先后顺序整体), 列表中的条目是不分先后
li 英文是 list item, 翻译为列表项
格式:
```
<h4>选择居住城市(CN)</h4>
<ul>
  <li>北京</li>
  <li>上海</li>
  <li>广州</li>
  <li>铁岭</li>
</ul>
```
`ul` 应用场景:
    导航条
    商品列表等
    新闻列表


### 有序列表(ordered list)

作用: 给一堆内容添加有序列表语义(一个有顺序整体), 列表中的条目有先后之分
格式:
```
  <h4>中国房价排行</h4>
  <ol>
      <li>北京</li>
      <li>上海</li>
      <li>广州</li>
      <li>铁岭</li>
  </ol>
```
ol应用场景:
某某的排行榜
其实ol应用场景并不多, 因为能用ol做的用ul都能做

注意事项:
ol和ul就是语义不一样，怎么使用都是一样的以及注意点都一样
其实ul还有两个常见属性start、type属性, 可以修改先导符号的样式和序号
但是由于样式将来都是通过css来完成, 所以这里就不给大家介绍了



### 定义列表(definition list)

作用: 给一堆内容添加列表语义, 通过dt罗列出列表的条目, 然后再通过dd给每个条目进行相应的描述
格式:

dt英文definition title, 翻译为定义标题
dd英文definition description, 翻译为定义描述信息
```
<dl>
  <dt>北京</dt>
  <dd>国家的首都, 看升国旗的地方</dd>
  <dt>上海</dt>
  <dd>魔都, 遍地是黄金的地方</dd>
</dl>
```
注意事项:
dl是一个`组标签`, 一定是一坨一坨的出现, 也就是说dt和dd标签不能单独存在, 必须包裹在dl里面
由于dl和dt、dd是一个整体, 所以dl里面不推荐包裹其它标签
dd和dt和li标签一样是容器标签, 里面可以添加任意标签
定义列表非常灵活, 可以给一个dt配置多个dd, 但是最好不要出现多个dt对应一个dd, dd的语义是描述离它最近的一个dt, 所以其它dt相当于没有描述, 而定义列表存在的意义就是既可以列出每一个条目又可以对每一个条目进行描述
定义列表非常灵活, 可以将多个dt+dd组合拆分为多个dl


## table 表格
### 作用、格式
作用: 以表格形式将数据显示出来, 当数据量非常大的时候, 表格这种展现形式被认为是最为清晰的一种展现形式
格式: table定义表格、tr定义行、td定义单元格

```
<table>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
</table>
```

### 表格中的属性

* border: 默认情况下表格的边框宽度为0看不到, 通过border属性给表格指定边框宽度
* width: 默认情况下表格的宽度是由内容自动计算出来的, 可以通过width属性指定表格的宽度
* height:默认情况下表格的高度是由内容自动计算出来的, 可以通过height属性指定表格的高度
* cellspacing: 外边距. 默认情况下单元格之间有2个像素的间隙, 可以通过cellpadding指定表格之间的间隙
* cellpadding: 内边距. 默认情况下单元格边缘距离内容有1个像素的内边距, 可以通过cellpadding属性指定单元格边缘和内容之间的内边距
* align: 规定表格相对周围元素的对齐方式, 它的取值有center、left、right
    给table设置align属性, 是让表格在浏览器中居左/居右/居中
    给tr设置align属性, 是让当前行中所有内容居左/居右/居中
    给td设置align属性,是让当前单元格中所有内容居左/居右/居中
    该属性仅仅作为了解, 企业开发中用css代替, 因为HTML仅仅用于说明语义
    如果td中设置了align属性, tr中也设置了align属性, 那么单元格中的内容会按照td中设置的来对齐
* valign: 规定表格相对周围元素的对齐方式, 它的取值有center、left、right
    给table设置valign属性, 无效
    给tr设置valign属性, 是让当前行中所有内容居上/居中/居下
    给td设置valign属性,是让当前单元格中所有内容居上/居中/居下
    如果td中设置了valign属性, tr中也设置了valign属性, 那么单元格中的内容会按照td中设置的来对齐
* bgcolor:规定表格的背景颜色
    给table设置bgcolor属性, 是给整个表格设置背景颜色
    给tr设置bgcolor属性, 是给当前行设置背景颜色
    给td设置bgcolor属性, 是给当前单元格设置背景颜色
    该属性仅仅作为了解, 企业开发中用css代替, 因为HTML仅仅用于说明语义

### 表格中的其它标签
表单中有两种类型的单元格, 一种是标准单元格td, 一种是表头单元格th
th标签: 给每一列设置标题, 单元格中的内容会自动加粗，居中
caption标签: 给整个表格设置标题
一定要嵌套在talbe标签内部才有效
表格结构的意义主要是用于SEO, 便于搜索引擎指定哪部分的内容是需要抓取的重要内容, 一般情况下搜索引擎会优先抓取tbody中的内容
由于有一部分浏览器对talbe的这种结构支持不是很好, 所以在企业开发中一般都不用严格的按照这种结构来编写


### 合并单元格
#### 横向合并
colspan: 合并当前列的哪几个单元格, 注意colspan之后向后合并, 不会向前合并
例如: `<td colspan="2"></td>`
含义: 把当前单元格当做两个单元格来看待

#### 纵向合并
rowspan:合并当前行的哪几个单元格, 注意rowspan之后向后合并, 不会向前合并
例如: `<td rowspan="2"></td>`
含义: 把当前单元格当做两个单元格来看待


## 表单(form)
表单(form)

作用: 用于收集用户信息, 让用户填写、选择相关信息
格式:
```
<form>
    所有的表单内容，都要写在form标签里面
</form>
```
注意事项:
所有的表单内容，都要写在form标签里面
form标签中有两个比较重要的属性action和method

### input标签
如果说td是表格最核心的标签, 那么input就是表单最核心的标签. nput标签有一个type属性, 这个属性有很多类型的取值, 取值的不同就决定了input标签的功能和外观不同
* 明文输入框
作用: 用户可以在输入框内输入内容
账号:`<input type="text"/>`
* 暗文输入框
作用: 用户可以在输入框内输入内容
密码:`<input type="password"/>`
* 给输入框设置默认值
账号:`<input type="text" value="123"/>`
密码:`<input type="password" value="123"/>`
* 规定输入字段中的字符的最大长度
账号: `<input type="text" name="fullname" maxlength="8" />`

### 单选框(radio)
作用: 用户只能从众多选项中选择其中一个
单选按钮，天生是不互斥的，如果想互斥，必须要有相同的name属性
设置默认选中`checked="checked"`
```
<input type="radio" name="xingbie" /> 男
<input type="radio" name="xingbie" checked="checked/> 女
<input type="radio" name="xingbie" /> 妖
```

### 多选框(checkbox)
作用: 用户只能从众多选项中选择多个
复选框，最好也是有相同的name（虽然他不需要互斥，但是也要有相同的name）
设置默认选中`checked="checked"`
```
<input type="checkbox" name="aihao" checked="checked/> 篮球
<input type="checkbox" name="aihao"/> 足球
<input type="checkbox" name="aihao"/> 棒球
```


### label标签
作用: label标签不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性
注意事项:
表单元素要有一个id，然后label标签就有一个for属性，for属性和id相同就表示绑定了
所有表单元素都可以通过label绑定
`label标签可以可以实现点击标签input也会获取焦点.`
```
<!--给文本框添加绑定-->
<label for="account">账号:</label>
<input type="text" id="account" />
<!--给单选框添加绑定-->
<input type="radio" name="sex" id="man" /> <label for="man">男</label>
<!--给多选框添加绑定-->
<input type="checkbox" id="basketball" />
<label for="basketball">篮球</label>
```

### 按钮
作用: 定义可点击按钮（多数情况下，用于通过 JavaScript 启动脚本）
`<input type="button" value="点我丫" />`

### 图片按钮
作用:定义图像形式的提交按钮
`<input type="image" src="lnj.jpg" />`

### 重置按钮
作用: 定义重置按钮。重置按钮会清除表单中的所有数据
`<input type="reset" />`
注意事项:
这个按钮不需要写value自动就有“重置”文字
`reset`只对form表单中表单项有效果（经测试rest对类型为password的input不起效）


### 提交按钮
作用:定义提交按钮。提交按钮会把表单数据发送到action属性指定的页面
`<input type="submit" />`
注意事项:
这个按钮不需要写value自动就有“提交”文字
要想通过submit提交数据到服务器, 被提交的表单项都`必须设置name属性`
默认明文传输(GET)不安全, 可以将method属性设置为POST改为非明文传输

### 隐藏域
作用: 定义隐藏的输入字段
`<input type="hidden">`
在Ajax中对数据的CRUD操作有非常大的作用

### 取色器、日期
`<input type="color">`
HTML5中input类型增加了很多type类型, 例如`color`、`date`但是都不兼容。

### 数据列表
作用: `给输入框绑定待选项`
格式:
```
<datalist>
  <option>待选项内容1</option>
  <option>待选项内容2</option>
</datalist>
```
如何给输入框绑定待选列表
搞一个输入框
搞一个datalist列表
给datalist列表标签添加一个id
给输入框添加一个list属性,将datalist的id对应的值赋值给list属性即可
请输入你的车型: 
```
<input type="text" list="cars">
<datalist id="cars">
    <option>奔驰</option>
    <option>宝马</option>
    <option>奥迪</option>
    <option>路虎</option>
    <option>宾利</option>
</datalist>
```

### 多行文本框(文本域)
作用: textarea标签用于在表单中定义多行的文本输入控件
cols属性表示columns“列”, 规定文本区内的可见宽度
rows属性表示rows“行”, 规定文本区内的可见行数
格式:
`<textarea cols="30" rows="10">`默认

## 关于路径问题（相对路径和绝对路径）
图片路径分为两种, 一种是绝对路径, 一种是相对路径, 我们重点学习相对路径, 因为在企业级开发中没有人使用绝对路径

### 绝对路径
从电脑的具体盘符开始寻找我们需要的资源
`<img src="F:/lnj/girl.png" />`
以上代码表示在F盘下查找lnj文件夹, 然后在lnj文件夹下查找girl.png图片
相对路径

一个文件相对于另外一个文件的位置寻找我们需要的资源
`<img src="girl.png" />`
假设html文件和girl.png都在lnj文件夹下, 以上代码表示在lnj文件夹下查找girl.png图片

### 为什么没人使用绝对路径?
可以移植性太差.
什么是可移植性?
可以简单的理解为把写到的代码拷贝到另外一台电脑上是否能够正常运行

### 为什么绝对路径可移植性差?
假如我编写的html文件放在我电脑的 F:/lnj 目录下, html文件中用到的图片放在F:/lnj/images目录下, 我给src指定的绝对路为F:/lnj/images/girl.png. 那么将来我将整个lnj文件夹拷贝给你, 如果你将lnj文件夹放在非F盘下, 那么将无法显示图片
例如你存放在C盘根目录, 那么图片的绝对路径会变为C:/lnj/images/girl.png, 而src会去F盘找, 所以不会显示
你只有将lnj文件夹存放在F盘根目录下时图片才会正常运行, 这就叫做可移植性不好

### 为什么相对路径可移植性好?
同上, 如果src指定的路径为images/girl.png, 那么无论你拷贝到那个盘, 哪个文件夹. 系统都只会在当前文件夹中的images下去查找图片, 不会受到盘符和存储位置的影响, 只要保证页面和图片位置的相对关系不变就不会影响到图片的显示

### 相对路径几种查找方式
1）同级
直接编写, 例如: girl.png
加上./ 编写, 例如./girl.png
./代表当前目录, ./girl.png代表在当前目录下查找

2）下级
直接编写, 例如abc/girl.png
加上./ 编写, 例如./abc/girl.png
相对当前目录有几个文件夹,就在后面依次补全几个文件夹名称即可, 例如 abc/bbb/ccc/ddd/girl.png或./abc/bbb/ccc/ddd/girl.png

3）上级
../代表访问上级目录
假设a文件夹下面有b文件夹, 图片存放在a文件夹中, html文件存放在b文件夹中, 那么路径为../girl.png
因为html文件在b文件夹中, 所以路径是相对于b文件夹的, 所以../代表访问b文件夹的上一级目录, b文件夹的上一级目录是a文件夹, 所以../girl.png就代表在a文件夹查找girl.png
注意事项:
相对路径不会出现这种格式aaa/../bbb/girl.png
虽然可以显示, 但是企业开发中千万不要这么写

