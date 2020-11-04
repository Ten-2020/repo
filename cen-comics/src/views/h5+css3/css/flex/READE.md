1. css 盒模型: content(内容),padding(内边距),margin(外边距),border(边框)
2. flx 布局(弹性布局)

- 任何一个容易都可以指定为 flex 布局.

```css
.box {
  display: flex;
}
/* 行内元素也可以使用 flex 布局 */
.box1 {
  display: inline-flex;
}
```

- 注: 在书写 header 时,要分成三列嘛.左边要放个 logo,右边要放那些退出登陆或者设置那些嘛,中间就是用来放项目或者系统的名称嘛.
- 中间这个就要居中,怎么让它居中呢,那就两边宽度固定,中间 flex:auto 就可以了.

3. flex 容器的属性

- flex-direction: row|row-reverse|column|column-reverse(水平方向与垂直方向以及逆向)
- flex-wrap: nowrap|wrap|wrap-reverse(不换行|不换行|第一行在下方)
- flex-flow: 是 上面 flex-direaction 和 flex-wrap 的简写形式,默认为 row nowrap.
- justify-content:flex-start|flext-end|center|space-between|space-around (左右对齐,居中,两端对齐等)
- align-items:flex-start|flex-end|center|baseline|stretch (向上下对齐,垂直对齐等)
- align-content:flex-start|flex-end|center|space-between|space-around|stretch(多根轴线的对齐方式.如果只有一根,不起作用)

4. 项目的属性

- order: 排列顺序,数值越小,越靠前,默认为 0.
- flex-grow: 放大比例,默认为 0(不放大)
- flex-shrink: 缩小比例,默认为 1(空间不足,将缩小)
- flex-basis: 在分配多余空间之前,项目占据的主轴空间.
- flex:  是上面三个的缩写,不包括order,默认为 0 1 auto,后两个属性可选.auto(1 1 auto)|none(0 0 auto)
- align-self:　允许单个项目有与其它项目不一样的对齐方式，可覆盖 align-items 属性.默认值为 auto ,表示继承父元素的align-items.
- 如果没有父元素,刚等同于 stretch.