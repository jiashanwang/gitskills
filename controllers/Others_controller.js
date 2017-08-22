define(["app"], function (app) {
    app.controller("Others_controller", function ($scope) {
        // 初始化变量
        $scope.categorys = [
            { name: "apidoc", contentName: "Others.apidoc" },
            { name: "gulp", contentName: "Others.gulp" }
        ];
        function changeItemActive() {
            for (var i = 0, len = $scope.categorys.length; i < len; i++) {
                $scope.categorys[i].isActive = false;
            }
        };
        changeItemActive();
        $scope.selected = function (item) {
             changeItemActive()
            item.isActive = true;
        };
    });
});