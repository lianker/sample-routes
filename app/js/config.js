require.config({
    paths: {
        "require": "../libs/requirejs/require",
        "text": "../libs/text/text",
        "jquery": "../libs/jquery/dist/jquery.min",
        "knockout": "../libs/knockout/dist/knockout",
        'helper': "../libs/knockout-amd-helpers/build/knockout-amd-helpers.min",
        "bootstrap": "../libs/bootstrap/dist/js/bootstrap",
        "crossroads": "../libs/crossroads.js/dist/crossroads.min",
        "hasher": "../libs/hasher/dist/js/hasher.min",
        "signals": "../libs/js-signals/dist/signals.min"
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        hasher: {
            deps: ["signals"]
        }
    }

});