(function(){
    'use strict'; 

    /**
     * @ngdoc function
     * @name menuApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the menuApp
     */
    angular.module('menuApp')
    .controller('MainCtrl', MainCtrl);

    //TODO : change scope to mc
    function MainCtrl($resource, $http){
        var mc = this;

        mc.level = { open : 0 };  

        $http.get('data/data.json').success(function(data) {
            mc.menu = data;
        }); 

        //Remove the scrollbar on load so it doesn't appear when not necessary
        $('#menu').removeClass('ps-active-y');  

        mc.newLevel = function(levelOpen) {
            var wMe = $('#menu').width();
            $( '#main-content' ).transition({ x:  0.10*levelOpen*wMe + 'px' }, 500, 'ease');
            $( '#menu' ).transition({ x:  10*levelOpen+ '%' }, 500, 'ease');
        };  

    };


})();
