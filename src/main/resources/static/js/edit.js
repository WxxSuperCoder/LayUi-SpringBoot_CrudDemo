layui.use(['form','laydate','layer'], function() {
    var form = layui.form;
    var laydate = layui.laydate;
    var layer = layui.layer;
    var $ = layui.jquery;

    //渲染日期
    laydate.render({
        elem: '#hireDate',
        trigger: 'click'
    });
})


    $("#addemp-btn").click(function () {
        //添加员工事件
            var id=$("#id").val()
            var name=$("#empName").val().trim()
            var sex=$("input[name='empSex']:checked").val()
            var age=$("#empAge").val()
            var phone=$("#empPhone").val()
            var depart=$("#empDept").val()
            var entTime=$("#hireDate").val()
            //ajax请求
            $.ajax({
                url:"edit",
                type:"POST",
                dataType:"json",
                data:{
                    "id":id,
                    "name":name,
                    "sex":sex,
                    "age":age,
                    "phone":phone,
                    "depart":depart,
                    "ent_time":entTime
                },
                success:function (data) {
                    if (data){
                        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                        parent.layer.close(index); //再执行关闭
                    }else {
                        alert("修改错误")
                    }
                }
            })
            return false;
        });


