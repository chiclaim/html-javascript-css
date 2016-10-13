# CSS三大特性
## 继承性
作用: 给父元素设置一些属性, 子元素也可以使用, 这个我们就称之为继承性
如下面样式会为p设置样式，因为p标签被div包含：
```
 <style>
        div{
            color: red;
        }
</style>
<div>
    <ul>
        <li>
            <p>我是段落</p>
        </li>
    </ul>
</div>
<!--p会变成红色-->
```

注意点:
并不是所有的属性都可以继承, 只有以`color`、`font-`、`text-`、`line-`开头的属性才可以继承
在CSS的继承中不仅仅是儿子可以继承, 只要是后代都可以继承
继承性中的特殊性
`a标签`的文字颜色和下划线是不能继承的
`h标签`的文字大小是不能继承的
```
<style>
        div{
            color: red;
            text-decoration: none;
            font-size: 30px;
        }
</style>
<div>
    <a href="#">我是超链接</a>
</div>
<div>
    <h1>我是大标题</h1>
</div>
<!--a的颜色和下划线不会发生变化, H的字体大小不对  -->
```
应用场景:
一般用于设置网页上的一些共性信息, 例如网页的文字颜色, 字体,文字大小等内容
```
body{
font-size: 30px;
font-family: "微软雅黑"
color: #666;
}
```


## 层叠性
CSS全称 `Cascading StyleSheet` (层叠式样式表), 其中的层叠就是指层叠性
作用: 层叠性就是CSS处理冲突的一种能力
示例代码
```
<style>
        p{
            color: red;
        }
        .para{
            color: blue;
        }
</style>
<p id="identity" class="para">我是段落</p>
<!-- 最终显示蓝色, 就算把.param和p的样式的位置调换，还是现实蓝色的，因为class优先级大于标签 -->
```
注意点:
层叠性只有在多个选择器选中”同一个标签”, 然后又设置了”相同的属性”, 才会发生层叠性




## 优先级
作用:当多个选择器选中同一个标签, 并且给同一个标签设置相同的属性时, 如何层叠就由优先级来确定
优先级判断的三种方式
### 间接选中就是指继承
如果是间接选中, 那么就是谁离目标标签比较近就听谁的
```
<style>
    li{
            color: blue;
      }
     ul{
            color: red;
      }
</style>
<ul>
    <li>
        <p id="identity" class="para">我是段落</p>
    </li>
</ul>
<!-- 最终显示蓝色 -->
```

### 相同选择器(直接选中)
如果都是直接选中, 并且都是同类型的选择器, 那么就是谁写在后面就听谁的
```
<style>
    p{
            color: blue;
      }
    p{
            color: red;
      }
</style>
<ul>
    <li>
        <p id="identity" class="para">我是段落</p>
    </li>
</ul>
<!-- 最终显示红色 -->
```


### 不同选择器(直接选中)
如果都是直接选中, 并且不是相同类型的选择器, 那么就会按照选择器的优先级来层叠
`id` > `类` > `标签` > `通配符` > `继承` > `浏览器默认`
```
<style>
        #identity{
            color: purple;
        }
        .para{
            color: pink;
        }
        p{
            color: green;
        }
        *{
            color: blue;
        }
        li{
            color: red;
        }
</style>
<ul>
    <li>
        <p id="identity" class="para">我是段落</p>
    </li>
</ul>
<!-- 最终显示紫色 -->
```
注意点:
通配符选择器也是直接选中



## 优先级权重
作用: 当多个选择器混合在一起使用时, 我们可以通过计算权重来判断谁的优先级最高
权重的计算规则

* 首先先计算选择器中有多少个id, id多的选择器优先级最高
* 如果id的个数一样, 那么再看类名的个数, 类名个数多的优先级最高
* 如果类名的个数一样, 那么再看标签名称的个数, 标签名称个数多的优先级最高
* 如果id个数一样, 类名个数也一样, 标签名称个数也一样, 那么就不会继续往下计算了, 那么此时谁写在后面听谁的

示例代码
```
<style>
         #identity1 .box2{
            color: red;
        }
        .box1 .box2{
            color: green;
        }
        div ul li p{
            color: blue;
        }
</style>
<div id="identity1" class="box1">
    <ul>
        <li>
            <p id="identity2" class="box2">我是段落</p>
        </li>
    </ul>
</div>
<!-- id多最终显示红色 -->

<style>
        .box1 .box2{
            color: blue;
        }
        div .box2{
            color: green;
        }
</style>
<div id="identity1" class="box1">
    <ul>
        <li>
            <p id="identity2" class="box2">我是段落</p>
        </li>
    </ul>
</div>
<!-- id一样, 比类多, 最终显示蓝色 -->


<style>
        #identity1 ul li p{
            color: red;
        }
        #identity1 ul p{
            color: green;
        }
</style>
<div id="identity1" class="box1">
    <ul>
        <li>
            <p id="identity2" class="box2">我是段落</p>
        </li>
    </ul>
</div>
<!-- id一样, 类一样, 比标签多最终显示红色 -->
<style>
        .box1 li #identity2{
            color: blue;
        }
        #identity1 ul .box2{
            color: red;
        }
</style>
<div id="identity1" class="box1">
    <ul>
        <li>
            <p id="identity2" class="box2">我是段落</p>
        </li>
    </ul>
</div>
<!-- id一样, 类一样, 标签一样, 最终显示红色 -->
```

注意点:
只有选择器是直接选中标签的才需要计算权重, 否则一定会听直接选中的选择器的




### !important
作用: 用于提升某个直接选中标签的选择器中的某个属性的优先级的, 可以将被指定的属性的优先级提升为最高
示例代码
```
<style>
        #identity{
            color: purple;
            font-size: 50px;
        }
        .para{
            color: pink ;
        }
        p{
            color: green !important;
        }
</style>
<ul>
    <li>
        <p id="identity" class="para">我是段落</p>
    </li>
</ul>
<!-- 最终显示绿色 -->
```

> 注意点:
!important只能用于`直接选中`, 不能用于间接选中
通配符选择器选中的标签也是直接选中的
!important只能提升被指定的属性的优先级, 其它的属性的优先级不会被提升
!important必须写在属性值得分号前面
!important前面的感叹号不能省略




# 元素显示模式


Div和Span标签

## 什么是div?
作用: 一般用于配合css完成网页的基本布局
```
<style>
        .header{
            width: 980px;
            height: 100px;
            background: red;
            margin: auto;
            margin-bottom: 10px;
        }
        .content{
            width: 980px;
            height: 500px;
            background: green;
            margin: auto;
            margin-bottom: 10px;
        }
        .footer{
            width: 980px;
            height: 100px;
            background: blue;
            margin: auto;
        }
        .logo{
            width: 200px;
            height: 50px;
            background: pink;
            float: left;
            margin: 20px;
        }
        .nav{
            width: 600px;
            height: 50px;
            background: yellow;
            float: right;
            margin: 20px;
        }
        .aside{
            width: 250px;
            height: 460px;
            background: purple;
            float: left;
            margin: 20px;
        }
        .article{
            width: 650px;
            height: 460px;
            background: deepskyblue;
            float: right;
            margin: 20px;
        }
</style>
<div class="header">
    <div class="logo"></div>
    <div class="nav"></div>
</div>
<div class="content">
    <div class="aside"></div>
    <div class="article"></div>
</div>
<div class="footer"></div>
```

## 什么是span?
作用: 一般用于配合css修改网页中的一些局部信息
```
<style>
    span{
        color: red;
    }
</style>
<p>努力到<span>无能为力</span>, 拼搏到<span>感动自己</span></p>
```

## div和span有什么区别?
1.div会单独的占领一行,而span不会单独占领一行
2.div是一个容器级的标签, 而span是一个文本级的标签
容器级的标签和文本级的标签的区别?

容器级的标签中可以嵌套其它所有的标签
常见容器级的标签: div h ul ol dl li dt dd …
文本级的标签中只能嵌套文字/图片/超链接
常见文本级的标签:span p buis strong em ins del …
注意点:
不用刻意去记忆哪些标签是文本级的哪些标签是容器级, 在企业开发中一般情况下要嵌套都是嵌套在div中, 或者按照组标签来嵌套(ul>li, ol>li , dl>dt+dd)




# CSS元素显示模式

在HTML中HTML将所有的标签分为两类, 分别是 `容器级` 和 `文本级`
在CSS中CSS也将所有的标签分为两类, 分别是 `块级元素` 和 `行内元素`(其实还有一类, `行内块级`)

块级元素会独占一行
行内元素不会独占一行
常见容器级的标签: div h ul ol dl li dt dd …

常见文本级的标签:span p buis stong em ins del …
常见块级元素: p div h ul ol dl li dt dd
常见行内元素: span buis strong em ins del

块级元素和行内元素的区别?

* 块级元素，独占一行，如果没有设置宽度, 那么默认和父元素一样宽，如果设置了宽高, 那么就按照设置的来显示
* 行内元素，不会独占一行，如果没有设置宽度, 那么默认和内容一样宽，行内元素是不可以设置宽度和高度的
* 行内块级元素，为了能够让元素既能够不独占一行, 又可以设置宽度和高度, 那么就出现了行内块级元素，不独占一行, 并且可以设置宽高


# CSS元素显示模式转换
如何转换CSS元素的显示模式?
设置元素的`display`属性
display取值 ：`block`块级 、`inline`行内、`inline-block`行内块级











