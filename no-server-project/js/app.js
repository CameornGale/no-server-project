angular.module("app",['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'template/home.html',
            // controller: 'homeCtrl'
        })
        .state('game', {
            // url: '/game',
            url: '/game/:id',
            templateUrl: 'template/game.html',
            controller: 'gameCrtl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'template/contact.html',
            // controller: 'productsCtrl'
        })
        .state('tictactoe', {
            parent: 'game',
            url: '/1/:id',
            templateUrl: 'template/tictactoe.html',
            controller: 'ticTacControl'
        })
        .state('cointoss', {
            parent: 'game',
            url: '/2/:id',
            templateUrl: 'template/cointoss.html',
            controller: 'cointossCtrl'
        })
        .state('flipping', {
            parent: 'cointoss',
            url: '/flipping',
            templateUrl: 'template/flipping.html',

        })
        .state('heads', {
            parent: 'cointoss',
            url: '/heads',
            templateUrl: 'template/landedHeads.html',

        })
        .state('tails', {
            parent: 'cointoss',
            url: '/tails',
            templateUrl: 'template/landedTails.html',

        })

        .state('eightball', {
            parent: 'game',
            url: '/3/:id',
            templateUrl: 'template/eightball.html',
            controller: 'eightballCtrl'
        })
        .state('eightballHome', {
            parent: 'eightball',
            url: '/eightballHome',
            templateUrl: 'template/magic8ball.html',

        })
        .state('roulette', {
            parent: 'game',
            url: '/4/:id',
            templateUrl: 'template/roulette.html',
            controller: 'rouletteCtrl'
        })
        .state('sudoku', {
            parent: 'game',
            url: '/5/:id',
            templateUrl: 'template/sudoku.html',
            controller: 'sudokuCtrl'
        })



    $urlRouterProvider
        .otherwise('/');
});
