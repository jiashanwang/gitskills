//定义路由
define(["app"], function (app) {
    //run  模板注入完成就执行的方法
    //app.run(function ($routScope, $state, $stateParams) {
    //    $rootScope.$state = $state;
    //    $rootScope.$stateParams = $stateParams;
    //});
    app.config(function ($stateProvider, $urlRouterProvider) {
        //默认跳转地址
        $urlRouterProvider.otherwise("/index");
        $stateProvider.state("index", {
            url: "/index",
            views: {
                '': {
                    templateUrl: "pages/main.html"
                },
                "topbar@index": {
                    templateUrl: "pages/navbar.html"
                },
                "main@index": {
                    templateUrl: "pages/Essay.html"
                }
            }
        }).state("Python", {
            url: "/Python",
            views: {
                '': {
                    templateUrl: "pages/main.html"
                },
                'topbar@Python': {
                    templateUrl: 'pages/navbar.html'
                },
                'main@Python': {
                    templateUrl: 'pages/Python.html',
                },

            }

        }).state("JavaScript", {
            url: "/JavaScript",
            views: {
                '': {
                    templateUrl: "pages/main.html"
                },
                'topbar@JavaScript': {
                    templateUrl: 'pages/navbar.html'
                },
                'main@JavaScript': {
                    templateUrl: 'pages/JavaScript.html',
                },
                "leftBar@JavaScript": {
                    templateUrl: 'pages/JSLeftBar.html',
                },
                "rightMain@JavaScript":{
                     templateUrl: 'pages/rightMain.html',
                }

            }
        }).state("Internet", {
            url: "/Internet",
            views: {
                '': {
                    templateUrl: "pages/main.html"
                },
                'topbar@Internet': {
                    templateUrl: 'pages/navbar.html'
                },
                'main@Internet': {
                    templateUrl: 'pages/Internet.html',
                },
            }
        }).state("Essay", {
            url: "/Essay",
            views: {
                '': {
                    templateUrl: "pages/main.html"
                },
                'topbar@Essay': {
                    templateUrl: 'pages/navbar.html'
                },
                'main@Essay': {
                    templateUrl: 'pages/Essay.html',
                },
            }
        })
    });
})
