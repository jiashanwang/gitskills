define(["app"], function (app) {
    app.controller("JavaScript_controller", function ($scope) {
        // 初始化变量
        $scope.categorys = [
            { name: "HTML", contents: ["<input>之颜色选择之颜色选择", "<input>之canvas", "<input>之多媒体"] },
            { name: "CSS", contents: ["transform", "动画", "cursor-新特性"] },
            { name: "JavaScript", contents: ["User-Agent", "浏览器内核"] }
        ];
        for (var i = 0, len = $scope.categorys.length; i < len; i++) {
            $scope.categorys[i].isActive = true;
        }
        console.log($scope.categorys);
        console.log(333);
        $scope.showStatus = function (item,$event) {
            item.isActive = !item.isActive;
        }
    });
});