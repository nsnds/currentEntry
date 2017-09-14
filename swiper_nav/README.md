# Swiper实现选中项目居中及动画效果

## 效果
![演示图片](demo.gif)

### 参考
[http://www.17sucai.com](http://www.17sucai.com/preview/702590/2017-06-08/toutiaoNav/index.html)

### 坑
* 动态改变slide个数的时候不能滑动，因为swiper默认是在初始化的时候确定slide的个数，允许滑动几个slide。而swiper初始化的时候html还没有渲染出来，无法取得slide的真实个数。<br />
解决方案：observer和observeParents设置为true。代表修改swiper自己或子元素时，自动初始化swiper。修改swiper的父元素时，自动初始化swiper。
