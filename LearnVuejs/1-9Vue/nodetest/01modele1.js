
// 在node中 ， 一个JS文件就是一个模块
// 在node中 每一个JS文件的JS代码都是独立运行在一个函数中,而不是全局作用域
//                  所以一个模块中的变量和函数在其他模块总无法访问

// 我们可以通过 exports 向外部暴露变量或者方法
console.log('你好') 

var x = 10
var y = 20 

exports.x = 10

exports.fn = function(){}
