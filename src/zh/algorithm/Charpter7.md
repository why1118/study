# diff算法
![blockchain](https://upload-images.jianshu.io/upload_images/5518628-89bb3cd6ebdb4296.png "区块链")
## diff算法的作用
计算出Virtual DOM中真正变化的部分，并只针对该部分进行原生DOM操作，而非重新渲染整个页面。
## 传统diff算法
通过循环递归对节点进行依次对比，算法复杂度达到 O(n^3) ，n是树的节点数，这个有多可怕呢？——如果要展示1000个节点，得执行上亿次比较。。即便是CPU快能执行30亿条命令，也很难在一秒内计算出差异。
## ![blockchain](https://upload-images.jianshu.io/upload_images/5518628-d60043dbeddfce8b.png "区块链")
### 大致理解
    在两个不同的dom树中只能对两个dom树的同级进行比较
    如果说子元素的父元素不相同左边的整个节点都会被右边最新的节点换掉
# react
## React的diff算法
### （1）什么是调和？
将Virtual DOM树转换成actual DOM树的最少操作的过程 称为 调和 。
### （2）什么是React diff算法？
diff算法是调和的具体实现。
diff策略
React用 三大策略 将O(n^3)复杂度 转化为 O(n)复杂度
### 策略一（tree diff）：
Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。
策略二（component diff）：
拥有相同类的两个组件 生成相似的树形结构，
拥有不同类的两个组件 生成不同的树形结构。
### 策略三（element diff）：
对于同一层级的一组子节点，通过唯一id区分。