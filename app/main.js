require.config({
    baseUrl: 'node_modules',
    paths: {
        'jquery': 'jquery/dist/jquery',
        'suren-restful': 'suren-restful/restFul',
        'suren-require': 'suren-require/suren-require',
        'underscore': 'underscore/underscore',
        'backbone': 'backbone/backbone',
        'text': 'text/text'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'backbone'
        }
    }
});

require(['jquery', 'suren-restful', 'backbone'], function ($, sr, backbone) {
    console.log(sr.help());

    var Router = backbone.Router.extend({
        routes: {
            'hello': 'hello'
        },
        hello: function () {
            require(['./hello'], function (module) {
                module.run();
            });
        }
    });
    new Router();
    backbone.history.start();

    return;
    $.suAjax().query({
        url: 'package.json',
        success: function (data) {
            console.log(data.dependencies);
            var config = {
                paths: {}
            };
            for(var i in data.dependencies) {
                console.log(i);

                $.suAjax().query({
                    url: 'node_modules/' + i + '/package.json',
                    async: false,
                    success: function (data) {
                        var path = 'node_modules/' + i + '/' + data.main;
                        console.log(path);
                        //require([path]);
                        config.paths[i] = path;
                    }
                });
            }

            console.log(config);
            console.log(require.config);
        }
    });
});