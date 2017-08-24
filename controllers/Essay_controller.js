// define(["app"],function (app){
//     app.controller("Essay_controller",function ($scope){
//         $scope.name = "Essay_controller";
//     });
// });
define(["app"], function (app) {
    app.controller("Essay_controller", function ($scope) {
        // 初始化变量
        $scope.categorys = [
            { name: "生活", contentName: "Essay.life" },
            { name: "工作", contentName: "Essay.work" }
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