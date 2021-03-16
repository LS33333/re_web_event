// 封装一个处理对象为字符串的函数
function resolveDate(date) {
    var arr = []
    for (var k in date) {
        var str = k + '=' + date[k]
        arr.push(str)
    }
    return arr.join('&')
}
var newDate = resolveDate({ name: 'cathy', age: 18 })
console.log(newDate);