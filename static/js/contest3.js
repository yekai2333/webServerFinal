function fill3(that){
    $.ajax({
        type: 'get',
        url: '/nginx',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            $.each(result, function (i, j) {
                $.each(j, function (m, n) {
                    $('#table3').append('<tr>'+'<td> '+n.date+'</td>'+
                        '<td> '+n.name+'</td>'+
                        '<td> '+n.num+'</td>'+'</tr>');

                });
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            alert("表格1请求数据失败!");
        }
    });
}