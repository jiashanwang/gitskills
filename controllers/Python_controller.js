define(["app"], function (app) {
    app.controller("Python_controller", function ($scope) {
        // 初始化变量
        $scope.InitPage = function () {
            // pass
        };
        $scope.categorys = [
            {
                name: "Pyton", contents: [
                    { name: "基础语法", contentName: "Python.BasicGrammar" },
                    { name: "控制语句", contentName: "Python.ControlStatement" },
                    { name: "数据结构", contentName: "Python.DataStructure" },
                    { name: "模块与函数", contentName: "Python.Function" },
                    { name: "字符串", contentName: "Python.String" },
                    { name: "文件处理", contentName: "Python.FileProcesse" },
                    { name: "面向对象", contentName: "Python.Object" },
                    { name: "进程与线程", contentName: "Python.processThread" },
                    { name: "扩展与嵌入", contentName: "Python.Object" },
                ]
            },
            {
                name: "dataBase", contents: [
                    { name: "MongoDB", contentName: "Python.MongoDB" },
                    { name: "MySQL", contentName: "Python.MySQL" },
                    { name: "Pymongo", contentName: "Python.Pymongo" },
                ]
            },
            {
                name: "Standard library", contents: [
                    { name: "dateTime", contentName: "python.dateTime" },
                    { name: "OS", contentName: "python.OS" }
                ]
            },
            {
                name: "Flasky", contents: [
                    { name: "jinja2", contentName: "python.jinja2" },
                    { name: "Flack-Mail", contentName: "python.FlackMail" }
                ]
            },
            {
                name: "Docker", contents: [
                    { name: "Docker1", contentName: "python.Docker1" },
                    { name: "Docker2", contentName: "python.Docker2" }
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