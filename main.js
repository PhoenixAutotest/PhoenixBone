require.config({
    paths: {
        'jquery': './node_modules/jquery/dist/jquery',
        'suren-restful': './node_modules/suren-restful/restFul'
    },
    shim: {
        'suren-restful': {
            deps: ['jquery']
        }
    }
});

require(['suren-restful'], function () {
    console.log('ddsd');
});