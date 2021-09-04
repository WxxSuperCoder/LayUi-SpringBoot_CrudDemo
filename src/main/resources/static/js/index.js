//导航：依赖element模块
layui.use('element',function () {
    var element = layui.element;
});
/*____________________________________________________________________*/
/*点击导航栏进入相应页面*/
$(".OrgStru").click(function () {
    $("#iframe_org").attr("src","OrgStru.html")
});
/*____________________________________________________________________*/
