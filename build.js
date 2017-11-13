{
    baseUrl: 'app',
        dir: 'dist',
    optimize: "uglify",
    mainConfigFile: 'main.js',
    modules: [
    {name: 'hello',
    exclude: [
        'text',
        'jquery'
    ]}
    ]
}