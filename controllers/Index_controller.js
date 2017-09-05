define(["app"], function (app) {
    app.controller("Index_controller", function ($scope) {
        // 初始化变量
        $scope.InitPage = function () {
            // pass
            // $("#navbarList").on("click", "li a", function (event) {
            //     var navLists = $(event.target).parent().siblings()
            //     for (var i = 0; i < navLists.length; i++) {
            //         $(navLists[i]).css("backgroundColor", "#0593D3")
            //     };
            //     $(event.target).css("backgroundColor", "#0482BA")
            //     $(event.target).parent().css("backgroundColor", "#0482BA")
            // })
        };
        // $scope.navbars = [
        //     {"name":"JavaScript","colorStatus":"false"},
        //     {"name":"Python","colorStatus":"false"},
        //     {"name":"Internet","colorStatus":"false"},
        //     {"name":"Essay","colorStatus":"false"},
        //     {"name":"Others","colorStatus":"false"}
        // ]
    });
});