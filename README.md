# Sing He's command

## Who is Single He
who is the new king, the guardian of the seven kingdoms.

LOL

## Build it yourself

```
npm install
gulp default / watch
```
##补充说明
（1）整个工程是用grunt构建的，但是我不太懂。就没有按那个方式继续弄。
（2）build文件夹中，包含了指定页面的css样式以及一些共有的css、js。比如：about对应乡镇概况页，govinfo对应政务公开，pub_interaction对应公众互动，scenary对应风景图片页面。
（3）src目录下是一些主要是一些js文件：主要包括获取日期js(getDate.js),实现文字溢出后用...代替的js(jquery-dotdotdot.js),基本的jquery依赖(jquery-1.1.3.js),scrollTop.js(返回页面顶部)。
（4）根据psd图制作新页面的时候，头部和尾部的模块基本不需要改变，就是对中间部分进行修改。记得把一些共有css,js加入进去，具体可以参考已做好的index.html或者about.html页面，使用goole的审查元素来查看。页面有点乱。。。
（5）针对新添加的页面，如果有单独的css，最好单独建立一个css文件或者js文件。
（6）img文件夹存放的是一些图标，所以之后切图下来的一些icon可以都入该文件夹。
