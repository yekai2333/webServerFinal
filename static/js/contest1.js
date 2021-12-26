SepFalg = true;
OctFlag = true;

function fill(that) {
    $.ajax({
        type: 'get',
        url: '/get',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            $.each(result, function (i, j) {
                $.each(j, function (m, n) {
                    $('#table1').append('<tr>' + '<td> ' + n[0] + '</td>' +
                        '<td> ' + n[1] + '</td>' +
                        '<td> ' + n[2] + '</td>' + '</tr>');
                });
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            alert("表格1请求数据失败!");
        }
    });
}

function fill2(that) {
    var brower = [],
        names = [];
    var index = $(that).data('index');
    $.ajax({
        type: 'get',
        url: '/log',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.data, function (index, item) {
                var dateMonth = item.date.split(" ");
                if (SepFalg) {
                    var sepDate = item.date.split(" ");
                    $('#table2').append('<tr>' + '<td> ' + item.name + '</td>' +
                        '<td> ' + "Sep " + sepDate[1] + '</td>' +
                        '<td> ' + item.lines + '</td>' +
                        '<td> ' + item.errors + '</td>' + '</tr>');
                    SepFalg = false;
                } else if (OctFlag) {
                    var octDate = item.date.split(" ");
                    $('#table4').append('<tr>' + '<td> ' + item.name + '</td>' +
                        '<td> ' + "Oct " + octDate[1] + '</td>' +
                        '<td> ' + item.lines + '</td>' +
                        '<td> ' + item.errors + '</td>' + '</tr>');
                    OctFlag = false;
                }else{
                    if(dateMonth[0]=="Nov"){
                        $('#table5').append('<tr>' + '<td> ' + item.name + '</td>' +
                        '<td> ' + item.date + '</td>' +
                        '<td> ' + item.lines + '</td>' +
                        '<td> ' + item.errors + '</td>' + '</tr>');
                    }else{
                        $('#table6').append('<tr>' + '<td> ' + item.name + '</td>' +
                        '<td> ' + item.date + '</td>' +
                        '<td> ' + item.lines + '</td>' +
                        '<td> ' + item.errors + '</td>' + '</tr>');
                    }
                }
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
        }
    });
}