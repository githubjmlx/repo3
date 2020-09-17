console.log(arguments.callee) 

// arguments只有函数中有,全局变量中没有此对象
// 每一个函数都有一个arguments对象，它包括了函数所要调的参数，
// 通常我们把它当作数组使用，用它的length得到参数数量，但它却不是数组
// 有时我们希望将它转换成真正的数组使用，可以使用下面的代码：
// var args = Array.prototype.slice.call(arguments); 

// console.log(arguments.callee+ "")  // 加个拼串, 转字符串

// 在node中执行时 function (exports, require, module, __filename, __dirname) {
// 自动在函数中执行
//}

/* exports
        -该对象用来将变量或函数暴露到外部
   require
        -函数,用来引入外部的模块
   module
        -module代表当前模块本身
        -exports就是module的属性
        -既可以使用 exports 导出, 也可以使用module.exports导出 
   __filename
        d:\VUEstudy\VueTest\nodetest\03.modele3.js
        当前模块的完整路径
   __dirname
        d:\VUEstudy\VueTest\nodetest
        当前文件所在文件夹路径


*/
console.log(__dirname)