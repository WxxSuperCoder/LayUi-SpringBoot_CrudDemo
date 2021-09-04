
//页面加载完毕
$(function (){
    find()
})
//导航：依赖element模块
layui.use('element',function () {
    var element = layui.element;
});
/*——————————————————————————————————————————————————————————*/
/*隐藏表格tableData*/
function hidden(){
    var tableData = document.getElementById('tableData');
    tableData.style.display ="none";
}
/*——————————————————————————————————————————————————————————*/
/*树*/

layui.use('tree', function(){
    var tree = layui.tree;

    //渲染
    var inst1 = tree.render({
        elem: '#OrgTree',//绑定元素

        showCheckbox: true
        ,data: [{
            title: '中融源安子公司' //一级菜单
            ,children: [{ //二级菜单
                title: '软件研发部',

            }
            ,{
                title: '交付实施部',
                id:"test1"
                }
            ,{
                title: '售后服务部',
                }
            ,{
                title: '行政部',
                }
            ],
        },
            {
            title: '技术支持中心' //一级菜单
            ,children: [{
                title: '兰台之家' //二级菜单
            }
            ,{
                title: '售前技术支持',
                    }]
        }],
        /*给树添加单击事件*/
        click:function (obj) {
             if (obj.data.title=="软件研发部"){
                 $("#depart").val("软件研发部")
                 find()
             }
             if (obj.data.title=="交付实施部"){
                 $("#depart").val("交付实施部")
                 find()
             }
            if (obj.data.title=="售后服务部"){
                $("#depart").val("售后服务部")
                find()
            }
            if (obj.data.title=="行政部"){
                $("#depart").val("行政部")
                find()
            }
        },
        id: "field",
    });
});
/*——————————————————————————————————————————————————————————*/
/*表单*/
layui.use(['layer','table'],function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var table  = layui.table;

    /*绑定当前行事件*/
    table.on('tool(test)',function (obj) {
        if (obj.event == 'del') {
            $.ajax({
                url:"delete",
                data:{"id":obj.data.id},
                dataType:"json",
                type:"POST",
                success:function (data) {
                    if (data){
                        find()
                    }else {
                        alert("删除失败")
                    }
                }
            })

            //删除
        } else if (obj.event = "edit") {
            /*给【编辑按钮绑定事件】*/
                //弹出层
                layer.open({
                    type: 2, //iframe层
                    title: '编辑员工信息',
                    area:['500px','500px'],
                    btn:["确定","取消"],
                    closeBtn: 2,
                    shade: 0.3,
                    content:"editEmpl.html?id="+obj.data.id,
                    end:function () {
                        find()
                    }
                });



        } else {
            console.log("不存在");
        }
    });


    /*给【添加】按钮绑定单击事件*/
    $("#addEmpl").click(function () {
        //弹出层
        layer.open({
            type: 2, //iframe层
            title: '添加员工',
            area:['500px','500px'],
            closeBtn: 2,
            shade: 0.3,
            content:"addEmpl.html",
            end:function () {
                find()
            }
        });

    });

})
/*——————————————————————————————————————————————————————————*/
/*当查寻方法被调用，刷新列表*/
function find(){
    layui.use('table',function () {
        var table = layui.table;
        var name=$("#name").val().trim()
        var sex=$("#sex").val().trim()
        var phone=$("#phone").val().trim()
        var depart=$("#depart").val().trim()
        var ent_time=$("#ent_time").val().trim()
        var smallAge=$("#smallAge").val()
        var bigAge=$("#bigAge").val()
        //发送ajax请求
        $.ajax({
        url:"find",
            dataType:"json",
            type:"GET",
            data:{"name":name,"sex":sex,"phone":phone,"depart":depart,"ent_time":ent_time,"smallAge":smallAge,"bigAge":bigAge},
            success:function (data) {
                table.render({
                    elem: '#data',
                    page: true,  //开启分页
                    method: "get",
                    limit: 6,  //一页的条目数
                    limits: [2,4,6,8,10],

                    cols: [[  //表头
                        {field: 'id',
                            title: '编号',
                            sort: true, //启用排序
                        },
                        {field: 'name',
                            title: '姓名',
                            sort: true, //启用排序
                        },
                        {field: 'sex',
                            title: '性别',
                            sort: true, //启用排序
                        },
                        {field: 'age',
                            title: '年龄',
                            sort: true, //启用排序
                        },
                        {field: 'phone',
                            title: '联系方式',
                            sort: true, //启用排序
                        },
                        {field: 'depart',
                            title: '部门',
                            sort: true, //启用排序
                        },
                        {field: 'ent_time',
                            title: '入职时间',
                            sort: true, //启用排序
                        },
                        {
                            title:'操作',
                            align:'center',
                            templet:function () {
                                var str ="<button type=\"button\" class=\"layui-btn layui-btn-xs layui-btn-warm\" lay-event='edit'>编辑</button>";
                                str += "<button type=\"button\" class=\"layui-btn layui-btn-xs layui-btn-danger\" lay-event='del'>删除</button>";
                                return str;
                            }
                        },
                        {
                            title:'批量操作',
                            align:'center',
                            templet:function () {
                                var str ="<input type='radio'></input>";
                                return str;
                            }
                        }
                    ]]
                    ,data: data
                    ,response: {
                        statusCode: 200,//重新规定成功的状态码为 200，table 组件默认为 0

                    },
                })
            }
        })
    });
}
/*——————————————————————————————————————————————————————————*/
