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




## CSS元素显示模式

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


## CSS元素显示模式转换
如何转换CSS元素的显示模式?
设置元素的`display`属性
display取值 ：`block`块级 、`inline`行内、`inline-block`行内块级


# 背景相关属性

## 背景颜色
如何设置标签的背景颜色?
在CSS中可以通过`background-color`属性设置标签的背景颜色
取值:具体单词、rgb、rgba、十六进制
格式:
```
<style>
      div{
          width: 100px;
          height: 50px;
      }
      .box1{
          background-color: red;
      }
      .box2{
          background-color: rgb(0,255,0);
      }
      .box3{
          background-color: rgba(0,0,255,0.7);
      }
      .box4{
          background-color: #0ff;
      }
</style>
```


## 背景图片

如何设置背景图片?
在CSS可以通过`background-image: url();`设置背景图片
格式:
```
<style>
      div{
          width: 500px;
          height: 500px;
      }
      .box1{
          background-image: url(images/girl.jpg);
          /*background-image: url(http://img4.imgtn.bdimg.com/it/u=2278032206,4196312526&fm=21&gp=0.jpg);*/
      }
</style>
<div class="box1"></div>
```

注意点:
图片的地址必须放在url()中, 图片的地址可以是本地的地址, 也可以是网络的地址
如果图片的大小没有标签的大小大, 那么会自动在`水平和垂直`方向`平铺`来填充
如果网页上出现了图片, 那么浏览器会再次发送请求获取图片

## 背景平铺
如何控制背景图片的平铺方式?
在CSS中可以通过`background-repeat`属性控制背景图片的平铺方式的
取值:
`repeat` 默认, 在水平和垂直都需要平铺
`no-repeat` 在水平和垂直都不需要平铺
`repeat-x` 只在水平方向平铺
`repeat-y` 只在垂直方向平铺

格式:
```
<style>
        /*
        div{
            width: 500px;
            height: 500px;
        }
        .box1{
            background-color: red;
            background-image: url(images/girl.jpg);
            background-repeat: repeat-y;
        }
</style>
<div class="box1"></div>
```

## 背景定位
如何控制背景图片的位置?
在CSS中有一个叫做`background-position`属性, 就是专门用于控制背景图片的位置

格式:
background-position: 水平方向 垂直方向;

取值:
具体的方位名词
水平方向: left center right
垂直方向: top center bottom
```
<style>
        div{
            /*width: 500px;*/
            height: 500px;
        }
        .box1{
            background-color: red;
            background-image: url(images/girl.jpg);
            background-repeat: no-repeat;
            /*background-position: left top;*/
            /*background-position: right top;*/
            /*background-position: right bottom;*/
            /*background-position: left bottom;*/
            /*background-position: center center;*/
            /*background-position: left center;*/
            background-position: center top;
        }
</style>
<div class="box1"></div>
```
具体的像素
例如: `background-position: 100px 200px;`
记住一定要写单位, 也就是一定要写px
记住具体的像素是可以接收负数的
```
<style>
        div{
            /*width: 500px;*/
            height: 500px;
        }
        .box1{
            background-color: red;
            background-image: url(images/girl.jpg);
            background-repeat: no-repeat;
            /*background-position: 100px 0;*/
            /*background-position: 100px 200px;*/
            background-position: -100px -100px;
        }
</style>
```
应用场景:
当图片比较大的时候, 可以通过定位属性保证图片永远居中显示






## 背景属性连写

和font属性一样, background属性也可以连写

背景属性缩写的格式
background: 背景颜色 背景图片 平铺方式 关联方式 定位方式;
注意点：

* background属性中， 任何一个属性都可以被省略

## 背景关联

默认情况下背景图片会随着滚动条的滚动而滚动， 如果不想让背景图片随着滚动条的滚动而滚动， 那么我们就可以修改背景图片和滚动条的关联方式

如何修改背景关联方式？
在CSS中有一个叫做`background-attachment`的属性， 这个属性就是专门用于修改关联方式的
格式
`background-attachment：scroll;`

取值：

* scroll 默认值， 会随着滚动条的滚动而滚动
* fixed 不会随着滚动条的滚动而滚动



## 插入图片和背景图片的区别
区别1

* 背景图片仅仅是一个装饰, 不会占用位置
* 插入图片会占用位置

区别2

* 背景图片有定位属性, 所以可以很方便的控制图片的位置
* 插入图片没有定位属性, 所有控制图片的位置不太方便

区别3

* 插入图片的语义比背景图片的语义要强, 所以在企业开发中如果你的图片想被搜索引擎收录, 那么推荐使用插入图片


## css精灵

CSS精灵图是一种图像合成技术, 全称CSS Sprite

CSS精灵图作用

* 可以减少请求的次数, 以及可以降低服务器处理压力
* 如何使用CSS精灵图

CSS的精灵图需要配合背景图片和背景定位来使用
示例
```
    <style>
        .box{
            width: 86px;
            height: 28px;
            background-image: url(images/weibo.png);
            background-position: -425px -200px;
        }
    </style>
    <div class="box"></div>
```



# 盒模型


## 边框属性

什么边框?
边框就是环绕在标签宽度和高度周围的线条
边框属性的格式

### 连写(同时设置四条边)

border: 边框的宽度 边框的样式 边框的颜色;
示例代码
```
<style>
        .box{
            width: 100px;
            height: 100px;
            background-color: red;
            border: 5px solid blue;
            /*border: 5px solid;*/
            /*border: 5px blue;*/
            /*border: solid blue;*/
        }
</style>
```

注意点:

* 连写格式中颜色属性可以省略, 省略之后默认就是黑色
* 连写格式中样式不能省略, 省略之后就看不到边框了
* 连写格式中宽度可以省略, 省略之后还是可以看到边框
* 按方向连写(分别设置四条边)

border-top: 边框的宽度 边框的样式 边框的颜色;
border-right: 边框的宽度 边框的样式 边框的颜色;
border-bottom: 边框的宽度 边框的样式 边框的颜色;
border-left: 边框的宽度 边框的样式 边框的颜色;
示例代码
```
<style>
        .box{
            width: 100px;
            height: 100px;
            background-color: red;
            border-top:5px solid blue;
            border-right:10px dashed green;
            border-bottom:15px dotted purple;
            border-left:20px double pink;
        }
</style>
```


### 按要素连写(分别设置四条边)
border-width: 上 右 下 左;
border-style: 上 右 下 左;
border-color: 上 右 下 左;
示例代码
```
<style>
        .box{
            width: 500px;
            height: 500px;
            background-color: red;
            border-width: 5px 10px 15px 20px;
            border-style: solid dashed dotted double;
            border-color: blue green purple pink;
            /*border-color: blue green purple;*/
            /*border-color: blue green;*/
            /*border-color: blue;*/
        }
</style>
```
注意点:
这三个属性的取值是按照顺时针来赋值, 也就是按照上右下左来赋值, 而不是按照日常生活中的上下左右
这三个属性的取值省略时的规律
上 右 下 左 > 上 右 下 > 左边的取值和右边的一样
上 右 下 左 > 上 右 > 左边的取值和右边的一样 下边的取值和上边一样
上 右 下 左 > 上 > 右下左边取值和上边一样


### 非连写(方向+要素)
border-top-width: ;
border-top-style:;
border-top-color:;
border-right-width:;
border-right-style:;
border-right-color:;
border-bottom-width:;
border-bottom-style: ;
border-bottom-color:;
border-left-width:;
border-left-style:;
border-left-color:;

```
<style>
        .box{
            width: 500px;
            height: 500px;
            background-color: red;
            border-top-width: 5px;
            border-top-style: solid;
            border-top-color: blue;
            border-right-width: 10px;
            border-right-style: dashed;
            border-right-color: green;
            border-bottom-width: 15px;
            border-bottom-style: dotted;
            border-bottom-color: purple;
            border-left-width: 20px;
            border-left-style: double;
            border-left-color: pink;
        }
</style>
```

注意点:
同一个选择器中如果设置了多个边框属性, 后面的会覆盖前面的
```
.box3{
            border: 5px solid red;
            border-right:5px dashed red;
}
```




## 内边距属性
什么是内边距?
边框和内容之间的距离就是内边距

格式
单独设置四条边
```
padding-top: ;
padding-right: ;
padding-bottom: ;
padding-left: ;
```
示例代码
```
<style>
        div{
            width: 98px;
            height: 90px;
            border: 1px solid #000;
            background-color: red;
        }
        .box1{
            padding-top: 20px;
            padding-right:40px;
            padding-bottom:80px;
            padding-left:160px;
       }
</style>
```
同时设置四条边
`padding: 上 右 下 左;`
示例代码
```
<style>
        div{
            width: 98px;
            height: 90px;
            border: 1px solid #000;
            background-color: red;
        }
        .box1{
            /*padding:20px 40px 80px 160px;*/
            /*padding:20px 40px 80px;*/
            /*padding:20px 40px;*/
            padding:20px;
        }
</style>
```
注意点:

* 这三个属性的取值省略时的规律
* 上 右 下 左 > 上 右 下 > 左边的取值和右边的一样
* 上 右 下 左 > 上 右 > 左边的取值和右边的一样 下边的取值和上边一样
* 上 右 下 左 > 上 > 右下左边取值和上边一样
* 给标签设置内边距之后, 标签占有的宽度和高度会发生变化
* 给标签设置内边距之后, 内边距也会有背景颜色










## 外边距属性
什么是外边距?
标签和标签之间的距离就是外边距
格式
单独设置四条边
```
margin-top: ;
margin-right: ;
margin-bottom: ;
margin-left: ;
```

示例代码
```
<style>
  .box1{
            margin-top:20px;
            margin-right:40px;
            margin-bottom:80px;
            margin-left:160px;
        }
</style>
```

同时设置四条边
margin: 上 右 下 左;
示例代码
```
<style>
  .box1{
            margin:20px 40px 80px 160px;
            /*margin:20px 40px 80px;*/
            /*margin:20px 40px;*/
            /*margin:20px;*/
        }
</style>
```
注意点:

* 这三个属性的取值省略时的规律
* 上 右 下 左 > 上 右 下 > 左边的取值和右边的一样
* 上 右 下 左 > 上 右 > 左边的取值和右边的一样 下边的取值和上边一样
* 上 右 下 左 > 上 > 右下左边取值和上边一样
* 外边距的那一部分是没有背景颜色的
* 外边距合并现象 , 默认布局的垂直方向上外边距是不会叠加的, 会出现合并现象, 谁的外边距比较大就听谁的
示例代码
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>外边距合并现象</title>
  <style>
      span{
          display: inline-block;
          width: 100px;
          height: 100px;
          border: 1px solid #000;
      }
      div{
          height: 100px;
          border: 1px solid #000;
      }
      .hezi1{
          margin-right:50px;
      }
      .hezi2{
          margin-left:100px;
      }
      .box1{
          margin-bottom:50px;
      }
      .box2{
          margin-top:100px;
      }
  </style>
</head>
<body>
<span class="hezi1">我是span</span><span class="hezi2">我是span</span>
<div class="box1">我是div</div>
<div class="box2">我是div</div>
</body>
</html>
```
margin-top问题

如果两个盒子是嵌套关系, 那么设置了里面一个盒子顶部的外边距, 外面一个盒子也会被顶下来
如果外面的盒子不想被一起定下来,那么可以给外面的盒子添加一个边框属性
在企业开发中, 一般情况下如果需要控制嵌套关系盒子之间的距离, 应该首先考虑padding, 其次再考虑margin(margin本质上是用于控制兄弟关系之间的间隙的)
示例代码
```
<style>
        .big{
            width: 500px;
            height: 500px;
            background-color: red;
            /*不设置边框, big也会被small的顶部外边距顶下去*/
            border: 5px solid #000;
        }
        .small{
            width: 200px;
            height: 200px;
            background-color: blue;
            margin-top:150px;
            margin-left:150px;
        }
    </style>
```

text-align:center;和margin:0 auto;区别

text-align: center; 是设置盒子中存储的文字/图片水平居中
margin:0 auto;是让盒子自己水平居中
示例代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>53-盒子居中和内容居中</title>
    <style>
        .father{
            width: 800px;
            height: 500px;
            background-color: red;
            /*文字图片会居中*/
            /*text-align: center;*/
            /*盒子自身会居中*/
            margin:0 auto;
        }
        .son{
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
</head>
<body>
<div class="father">
    我是文字<br/>
    <img src="images/girl.jpg" alt="">
    <div class="son"></div>
</div>
</body>
</html>
```



## 盒模型

什么是CSS盒模型?

* CSS盒模型仅仅是一个形象的比喻, HTML中的标签都是盒模型
* CSS盒模型指那些可以设置宽度高度/内边距/边框/外边距的标签
* 这些属性我们可以用日常生活中的常见事物——盒子作一个比喻来理解，所以HTML标签又叫做盒模型


示例代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>48-CSS盒子模型</title>
    <style>
        span,a,b,strong{
            display: inline-block;
            width: 100px;
            height: 100px;
            border: 6px solid #000;
            padding: 20px;
            margin: 20px;
        }
    </style>
</head>
<body>
<span>我是span</span>
<a href="#">我是超链接</a>
<b>我是加粗</b>
<strong>我是强调</strong>
</body>
</html>
```

盒模型宽度和高度
内容的宽度和高度
就是通过width/height属性设置的宽度和高度

元素的宽度和高度
宽度 = 左边框 + 左内边距 + width + 右内边距 + 右边框
高度 同理可证

规律
增加了padding/border之后元素的宽高也会发生变化
如果增加了padding/border之后还想保持元素的宽高, 那么就必须减去内容的宽高


元素空间的宽度和高度
宽度 = 左外边距 + 左边框 + 左内边距 + width + 右内边距 + 右边框 + 右外边距
高度 同理可证


box-sizing属性
CSS3中新增了一个box-sizing属性, 这个属性可以保证我们给盒子新增padding和border之后, 盒子元素的宽度和高度不变

box-sizing取值
content-box
元素的宽高 = 边框 + 内边距 + 内容宽高
border-box
元素的宽高 = width/height的宽高
增加padding和border之后要想保证盒子元素的宽高不变, 系统会自动减去一部分内容的宽度和高度
示例代码
```
<!--增加padding/border之后元素宽高会变大-->
<style>
.box1{
    width: 200px;
    height: 200px;
    background-color: blue;
    float: right;
    border: 20px solid #000;
    padding: 20px;
}
</style>
<!--增加padding/border之后元素宽不会变大-->
<style>
.box1{
 box-sizing: border-box;
    width: 200px;
    height: 200px;
    background-color: blue;
    float: right;
    border: 20px solid #000;
    padding: 20px;
}
</style>
```

