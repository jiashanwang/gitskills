define(["app"], function (app) {
    app.controller("JavaScript_controller", function ($scope) {
        // 初始化变量
        $scope.categorys = [
            {
                name: "HTML", contents: [
                    { name: "<input>之颜色选择之颜色选择", contentName: "JavaScript.colorSelected" },
                    { name: "<input>之canvas", contentName: "JavaScript.canvas" },
                    { name: "<input>之多媒体", contentName: "JavaScript.multimedia" }
                ]
            },
            {
                name: "CSS", contents: [
                    {name:"transform",contentName:"JavaScript.transform"},
                    {name:"动画",contentName:"JavaScript.animation"},
                    {name:"cursor-新特性",contentName:"JavaScript.newKind"}
                ]
            },
            {
                name: "JavaScript", contents: [
                    {name: "User-Agent",contentName:"JavaScript.transform"},
                    {name:  "浏览器内核",contentName:"JavaScript.transform"}
                ]
            }
        ];
        for (var i = 0, len = $scope.categorys.length; i < len; i++) {
            $scope.categorys[i].isActive = true;
        }
        $scope.showStatus = function (item, $event) {
            item.isActive = !item.isActive;
        }
        // $scope.itemContent = function (x) {
        //     console.log(x);
        //     $scope.itemCnt = "JavaScript.canvas";
        //     // $scope.itemCnt = "JavaScript." + x.contentName;
        //     console.log($scope.itemCnt);
        // }
    });
});