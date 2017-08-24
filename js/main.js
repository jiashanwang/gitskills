// 首先进行需要加载的模块路径的配置 有两种配置的方式
// 方式一： 
// 备注：由于require本身管理的就是js文件，所有配置的js后缀名可以省略
require.config({
    paths: {
        "angular": "../libs/angular.min",
        "ui.router": "../libs/angular-ui-router.min",
        "jquery": "../libs/jquery-1.11.1.min",
        //如果某个模块在另一台主机上，也可以直接指定它的网址，比如jquery 的引入
        // "jquery":"https://cdn.bootcss.com/jquery/3.2.1/jquery.js",
        "less": "../libs/less.min",
        "app": "app",
        "mock": "../libs/mock-min",//mock默认采用AMD规范写的
        "config": "../libs/config",//配置路由
        "AuthorIndex": "../controllers/AuthorIndex_controller",
        "JavaScript": "../controllers/JavaScript_controller",
        "Python": "../controllers/Python_controller",
        "Internet": "../controllers/Internet_controller",
        "Essay": "../controllers/Essay_controller",
        "Others": "../controllers/Others_controller",
    },
    //require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，
    // 专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
    shim: {
        'angular': {
            exports: 'angular'
        },
        "ui.router": {
            deps: ["angular"],
            exports: "ui.router"
        },
    },
    // deps:["app"]
});
// 方式二：
// require.config({
//     baseUrl: "../libs",
//     paths: {
//         "angular": "angular.min",
//         "ui-rooter": "angular-ui-router.min",
//         "jquery": "jquery-1.11.1.min",
//         "config": "config",
//         "hightendusers": "hightendusers",
//         "apple": "apple"
//     }
// });

// 备注：require.js要求，每个模块是一个单独的js文件。这样的话，如果加载多个模块，就会发出多次HTTP请求，
// 会影响网页的加载速度。因此，require.js提供了一个优化工具，当模块部署完毕以后，可以用这个工具将多个模块合并在一个文件中，减少HTTP请求数。

// AMD模块的写法

// require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。
// 具体来说，就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。
// 如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。

// 加载非规范的模块

//页面入口需要执行的代码块

require(
    [
        "app",
        "config",
        "less",
        "jquery",
        "AuthorIndex",
        "JavaScript",
        "Python",
        "Internet",
        "Essay",
        "Others"
    ],
    function () {
        //angular.element()方法：当document加载完成的时候，开始执行回调
        angular.element(document).ready(function () {
            //手动启动angular模块 整个document被myApp模块接管控制
            angular.bootstrap(document, ["myApp"]);
        });


    });


