$(function() {
    //发起请求，获取数据
    function getNews() {
        $.ajax({
            type: 'get',
            url: 'http://www.liulongbin.top:3006/api/news',
            success: function(res) {
                if (res.status !== 200) return alert('新闻列表获取失败！')
                console.log(res);
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].tags = res.data[i].tags.split(',')
                }
                var con = template('tpl-news', res)
                $('#news-list').html(con)
            }
        })
    }
    getNews()

    // 时间过滤器
    template.defaults.imports.dateFormat = function(dtStr) {
        var dt = new Date(dtStr)
        var y = dt.getFullYear();
        var mon = padZero(dt.getMonth() + 10);
        var d = padZero(dt.getDate());

        var h = padZero(dt.getHours());
        var m = padZero(dt.getMinutes());
        var s = padZero(dt.getSeconds());

        return y + '-' + mon + '-' + d + ' ' + h + ':' + m + ':' + s
    }

    //补零函数
    function padZero(n) {
        if (n < 10) {
            return '0' + n
        } else {
            return n
        }
    }
})