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


require([
    'router',
    'knockout',
    'config',
    'helper'
], function (router, ko) {
    'use strict';
    ko.amdTemplateEngine.defaultPath = "../templates";

    ko.components.register('home', {
        template: { require: 'text!../pages/home/home.html' }
    });

    ko.components.register('about', {
        template: { require: 'text!../pages/about/about.html' }
    });
    
    ko.components.register('contact-us', {
        template: { require: 'text!../pages/contact-us/contactus.html' }
    });


    // Start the application
    ko.applyBindings({ route: router.currentRoute });
});


