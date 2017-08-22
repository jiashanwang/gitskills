define(["app"], function (app) {
    app.controller("JavaScript_controller", function ($scope) {
        // 初始化变量
        $scope.categorys = [
            {
                name: "HTML", contents: [
                    { name: "<input>之颜色", contentName: "JavaScript.colorSelected" },
                    { name: "<input>之canvas", contentName: "JavaScript.canvas" },
                    { name: "<input>之多媒体", contentName: "JavaScript.multimedia" }
                ]
            },
            {
                name: "CSS", contents: [
                    { name: "transform", contentName: "JavaScript.transform" },
                    { name: "动画", contentName: "JavaScript.animation" },
                    { name: "cursor-新特性", contentName: "JavaScript.newKind" }
                ]
            },
            {
                name: "JavaScript", contents: [
                    { name: "User-Agent", contentName: "JavaScript.transform" },
                    { name: "浏览器内核", contentName: "JavaScript.transform" }
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
                    $scope.categorys[i].isActive = true;
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