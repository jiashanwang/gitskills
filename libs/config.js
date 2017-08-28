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
                    templateUrl: "pages/AuthorIndex.html"
                }
            }
        })
        .state("AuthorIndex", {
            url: "/AuthorIndex",
            views: {
                '': {
                    templateUrl: "pages/main.html"
                },
                'topbar@AuthorIndex': {
                    templateUrl: 'pages/navbar.html'
                },
                'main@AuthorIndex': {
                    templateUrl: 'pages/AuthorIndex.html',
                },
                "leftBar@AuthorIndex": {
                    templateUrl: 'pages/AuthorIndex/AuthLeftBar.html',
                },
                "rightMain@AuthorIndex": {
                    templateUrl: 'pages/AuthorIndex/AuthRightMain.html',
                }
            }
        })
        .state("Python", {
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
                "leftBar@Python": {
                    templateUrl: 'pages/Python/PyLeftBar.html',
                },
                "rightMain@Python": {
                    templateUrl: 'pages/Python/PyRightMain.html',
                }

            }
        //Python 设置每个标签的内容展示页面--》二级页面
        }).state("Python.DataStructure", {//数据结构
            url: "/DataStructure",
            views: {
                "rightMain@Python": {
                    templateUrl: 'pages/Python/DataStructure.html',
                }
            }
        })
        .state("Python.Function", {
            url: "/Function",
            views: {
                "rightMain@Python": {
                    templateUrl: 'pages/Python/Function.html',
                }
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
                    templateUrl: 'pages/JavaScript/JSLeftBar.html',
                },
                "rightMain@JavaScript": {
                    templateUrl: 'pages/JavaScript/JSRightMain.html',
                }
            }
            //JavaScript 设置每个标签的内容展示页面--》二级页面
            // HTML 部分
        }).state("JavaScript.colorSelected", {
            url: "/colorSelected",
            views: {
                "rightMain@JavaScript": {
                    templateUrl: 'pages/JavaScript/colorSelected.html',
                }
            }
            //canvans 页面展示
        }).state("JavaScript.canvas", {
            url: "/canvas",
            views: {
                "rightMain@JavaScript": {
                    templateUrl: 'pages/JavaScript/canvas.html',
                }
            }
            //多媒体页面展示
        }).state("JavaScript.multimedia", {
            url: "/multimedia",
            views: {
                "rightMain@JavaScript": {
                    templateUrl: 'pages/JavaScript/multimedia.html',
                }
            }
         // JavaScript 部分
        }) .state("JavaScript.Introduction", { //简介
            url: "/Introduction",
            views: {
                "rightMain@JavaScript": {
                    templateUrl: 'pages/JavaScript/Introduction.html',
                }
            }
        }).state("JavaScript.PageJS", { //HTML与JavaScript
            url: "/PageJS",
            views: {
                "rightMain@JavaScript": {
                    templateUrl: 'pages/JavaScript/PageJS.html',
                }
            }
        })
        .state("JavaScript.Variable", { //变量，作用域，内存问题
            url: "/Variable",
            views: {
                "rightMain@JavaScript": {
                    templateUrl: 'pages/JavaScript/Variable.html',
                }
            }
        })
        .state("Others", {
            url: "/Others",
            views: {
                '': {
                    templateUrl: "pages/main.html"
                },
                'topbar@Others': {
                    templateUrl: 'pages/navbar.html'
                },
                'main@Others': {
                    templateUrl: 'pages/Others.html',
                },
                "leftBar@Others": {
                    templateUrl: 'pages/Others/leftBar.html',
                },
                "rightMain@Others": {
                    templateUrl: 'pages/Others/rightMain.html',
                }
            }
        }).state("Others.apidoc", {
            url: "/apidoc",
            views: {
                "OthersRightMain@Others": {
                    templateUrl: 'pages/Others/apidoc.html',
                }
            }
        }).state("Others.gulp", {
            url: "/gulp",
            views: {
                "OthersRightMain@Others": {
                    templateUrl: 'pages/Others/gulp.html',
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
                "leftBar@Internet": {
                    templateUrl: 'pages/Internet/IntLeftBar.html',
                },
                "rightMain@Internet": {
                    templateUrl: 'pages/Internet/IntRightMain.html',
                }
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
                "leftBar@Essay": {
                    templateUrl: 'pages/Essay/EsyLeftBar.html',
                },
                "rightMain@Essay": {
                    templateUrl: 'pages/Essay/EsyRightMain.html',
                }
            }
        })
    });
})
