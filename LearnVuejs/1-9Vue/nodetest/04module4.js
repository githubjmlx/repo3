// exports = module.exports
// exports 只能通过 . 的方式向外暴露
// module.exports 既可以 . 也可以赋值
module.exports = {
    name : '猪八戒',
    age : 18,
    sayName : function(){
        console.log('我是猪八戒')
    }
    
}