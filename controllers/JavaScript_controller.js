define(["app"], function (app) {
    app.controller("JavaScript_controller", function ($scope) {
        // 初始化变量
        $scope.InitPage = function (){
           // pass
        };
        $scope.categorys = [
            {
                name: "HTML", contents: [
                    { name: "块级元素", contentName: "JavaScript.colorSelected" },
                    { name: "行内元素", contentName: "JavaScript.canvas" },
                    { name: "行内块元素", contentName: "JavaScript.multimedia" },
                    { name: "盒子模型", contentName: "JavaScript.multimedia" }
                ]
            },
            {
                name: "CSS", contents: [
                    { name: "transition", contentName: "JavaScript.transition" },
                    { name: "动画", contentName: "JavaScript.animation" },
                    { name: "cursor-新特性", contentName: "JavaScript.newKind" }
                ]
            },
            {
                name: "JavaScript", contents: [
                    { name: "JavaScript简介", contentName: "JavaScript.Introduction" },
                    { name: "在HTML中使用JavaScript", contentName: "JavaScript.PageJS" },
                    { name: " 变量 作用域 内存", contentName: "JavaScript.Variable" },
                    { name: "引用类型", contentName: "JavaScript.ReferenceType" },
                    { name: "函数表达式", contentName: "JavaScript.FunctionExpression" },
                    { name: "BOM", contentName: "JavaScript.BOM" },
                    { name: "DOM", contentName: "JavaScript.DOM" },
                    { name: "事件", contentName: "JavaScript.Event" },
                    { name: "表单脚本", contentName: "JavaScript.FormScript" },
                    { name: "使用canvas绘图", contentName: "JavaScript.Canvas" },
                    { name: "HTML5脚本编程", contentName: "JavaScript.H5Script" },
                    { name: "JSON", contentName: "JavaScript.JSON" },
                    { name: "Ajax与Comet", contentName: "JavaScript.AjaxComet" },
                    { name: "高级技巧", contentName: "JavaScript.AdvancedSkills" },
                    { name: "客户端存储", contentName: "JavaScript.ClientStorage" },
                    { name: "新兴的API", contentName: "JavaScript.NewAPI" },
                ]
            },
            {
                name: "JQuery", contents: [
                    { name: "DOM操作", contentName: "JavaScript.transform" },
                    { name: "Ajax事件", contentName: "JavaScript.transform" }
                ]
            },
            {
                name: "Angular", contents: [
                    { name: "指令", contentName: "JavaScript.transform" },
                    { name: "路由", contentName: "JavaScript.transform" },
                    { name: "模块", contentName: "JavaScript.transform" }
                ]
            },
            {
                name: "Others", contents: [
                    { name: "jsonp跨域", contentName: "JavaScript.Jsonp" }
                   
                ]
            }
        ];
        // 每一列背景色切换--》代码封装
        function isShowStatus(lists) {
            for (var k = 0; k < lists.contents.length; k++) {
                lists.contents[k].isShow = false;
            };
        };
        //初始化列表项状态
        function addItems(b) {
            for (var i = 0, len = $scope.categorys.length; i < len; i++) {
                if (b == "t") {
                    $scope.categorys[i].isActive = false;
                    isShowStatus($scope.categorys[i])
                } else {
                    isShowStatus($scope.categorys[i])
                };
            };
        };
        addItems("t");
        //列表项点击添加背景色
        $scope.isShow = function (x) {
            addItems("tt");
            x.isShow = true;
        };
        //一，二 级菜单切换
        $scope.showStatus = function (item, $event) {
            item.isActive = !item.isActive;
        }
    });
});