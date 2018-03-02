**边距重叠** -| [边距重叠.html](边距重叠.html) ==>解决方案：加border 或padding 或者BFC

**BFC** (block formatting context) 块级格式化上下文 =====》是为了解决边距塌陷（边距重叠）问题。

    基本概念 -|
    基本原理 -| =》布局规则
                1、每个元素的margin box的左边，与包含块border box 的左边相接触，即使浮动也如此
                2、BFC区域不会与float box 重叠
                3、BFC是一个隔离的独立的容器，容器里面的子元素的不会影响到外面的元素，反之亦然。
                4、计算BFC高度的时候，浮动元素也参与计算。
    那些元素生成BFC -|
                    1、overflow: hidden、auto、inherit\initial (不为visible)
                    2、 postion: absoluted, fixed
                    3、float 不为none
                    4、根元素
                    5、display:inline-block\table-cell\table-caption\flex\inline-flex
    应用和解决了什么问题 -| [bfc使用场景.html](bfc使用场景)
                       1、自适应两栏布局
                       2、清除内部浮动
                       3、防止边距重叠