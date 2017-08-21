//定义一个全局模型 采用AMD规范 
define(["angular","ui.router"],function (angular){
    //ui.router必须引用进来
    var app = angular.module("myApp",["ui.router"]);
    return app;
});