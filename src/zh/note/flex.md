## flex布局
### 好处:flex布局可以简便，完整，响应式的实现各种页面布局
	flex布局提供了最大的灵活性
### 注意:
	设置flex以后，子元素的float，clear，vertical-align失效
	任何元素添加弹性盒属性，其父元素一定是一个弹性盒
### 添加在容器上的属性(父元素6个)
	flex-direction 设置项目显示的方向/设置主轴的方向/设置子元素的排列方向
		row 默认值 水平排列  设置主轴为水平方向
		column 垂直排列  设置主轴为垂直方向
		column-reverse 垂直翻转倒序显示
		row-reverse 水平翻转

	justify-content 设置主轴的对齐方式
		flex-start 主轴的起点对齐/开始点对齐  默认值
		flex-end 主轴的终点/结束点/末端对齐
		center 主轴对的中心点对齐
		space-between 主轴的两端对齐
		space-around 项目与项目的距离是项目距离浏览器距离的二倍/项目距离浏览器的距离是项目与项目距离的一半

	align-items 设置侧轴的对齐方式
		stretch 默认值 拉伸/撑满  
			注意:如果没有设置高度或者值为auto时，则表示占满整个父容器的高度
		flex-start 侧轴的起点对齐/开始点
		flex-end 侧轴的终点对齐/结束点/末端
		center 侧轴的中心点对齐
		baseline 侧轴的基线对齐

	flex-wrap 设置子元素的宽度大于父容器的宽度时，子元素是否换行显示
		nowrap 默认值 一行显示
		wrap 换行显示

	flex-flow 是一个符合属性
		是flex-direction 与 flex-wrap 的简写形式
		默认值 row nowrap

	align-content 设置多根轴线的对齐方式
		注意:如果只有一根轴线，则该属性失效(取决于flex-wrap是否换行显示)
		stretch 默认值 占满/撑开/拉伸
		flex-start 起点对齐
		flex-end 终点对齐
		center 居中对齐
		space-between 两端对齐
		space-around 项目与项目的距离是项目距离容器顶部的二倍
### 加在条目上的属性(项目/子元素 6个)
		flex-grow 分配剩余空间(放大比例)
			默认值 0
		
		flex-shrink 设置子元素的收缩值
		(分配剩余空间)
			默认值 1

		flex-basis 设置子元素的伸缩值
			默认值 auto

		flex 是 flex-grow 与 flex-shrink 与 flex-basis 的复合属性
			默认值 0 1 auto
			注: 第一个值是必须的，后两个值是可选的，如果不写则表示默认值 1 auto

			flex 有两个快捷键
				flex:auto;
				表示 1 1 auto
				flex:none 
				表示 0 0 auto

		order 设置子元素的显示顺序
			默认值 0
			注：值越小越靠前显示

		align-self 设置子元素单独的对齐方式
			auto 默认值
			flex-strat 起点对齐
			flex-end 终点对齐
			center 居中对齐
			stretch 拉伸/撑满
			baseline 基线对齐