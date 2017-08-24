define(["app"], function (app) {
    app.controller("Internet_controller", function ($scope) {
        // 初始化变量
        $scope.InitPage = function () {
            // pass
        };
        $scope.categorys = [
            {
                name: "浏览器", contents: [
                    { name: "内核", contentName: "python.DataType" },
                    { name: "渲染引擎", contentName: "python.Function " },
                    { name: "JS引擎", contentName: "python.Object" }
                ]
            },
            {
                name: "数据传输", contents: [
                    { name: "物理层", contentName: "python.MongoDB" },
                    { name: "数据链路层", contentName: "python.MySQL" },
                    { name: "网络层", contentName: "python.MySQL" },
                    { name: "传输层", contentName: "python.MySQL" },
                    { name: "会话层", contentName: "python.MySQL" },
                    { name: "表示层", contentName: "python.MySQL" },
                    { name: "应用层", contentName: "python.MySQL" },
                ]
            },
            {
                name: "搜索引擎", contents: [
                    { name: "域名", contentName: "python.dateTime" },
                    { name: "DNS", contentName: "python.OS" }
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