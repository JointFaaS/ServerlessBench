# HCloud 学习和改造笔记
本文档主要内容为记录 alexa 调用链路学习以及 HCloud 改造方法和设计进行记录。
tips: open 需要密码，密码的模板是 I love {password}, password 目前是 Tylor Swift
## alexa 各模块调用链路
### frontend
类似于一个 CLI 除了做了点正则就是对后续内容的调用。
input: `string`
output: `{'skill':string, 'utter': string}`
### interact 
对 alexa 整个 alexa 做封装，根据你的输入确定调用, interact 的 callee 如果是 smarthome，则将会调用light, air-condition 等所有smarthome。
input `{'skill':string, 'utter': string}`
output: `SkillRequest`
frontend <-> interact <-> smarthome

### 改造思路
目前存在的几个难点为：
1. smarthome 部分将会存在 `Promise.all(ps)`, 因此需要存在并发，考虑这里需要扩展 HCloud 的 Mesh 的功能，支持并发和一定程度的灵活性。例如在 stepchain 里面可设置为用户定义。
2. 目前的 HCloud 设计是 fast return 404，而不是类似 OpenWhisk blocking，这一点上是不是会需要考虑其他的方式。
