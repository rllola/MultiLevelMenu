'use strict';

/**
 * @ngdoc function
 * @name menuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the menuApp
 */
angular.module('menuApp')
  .controller('MainCtrl', function ($scope, $resource, $http) {

    $scope.level = { open:0 };

    /*$scope.menu = [
      { title : "Choix 1",
        code : "choix1",
        children : [
          { title : "Choix 11",
            code : "choix11" ,
            children : [
            { title : "Choix 111",
              code : "choix111" ,
              children : []
            }
            ]
          },
          { title : "Choix 12",
            code : "choix12" ,
            children : []
          },
          { title : "Choix 13",
            code : "choix13" ,
            children : []
          }
        ]
      },
      { title : "Choix 2",
        code : "choix2",
        children : [
          { title : "Choix 21",
            code : "choix21" ,
            children : []
          },
          { title : "Choix 22",
            code : "choix22" ,
            children : []
          },
          { title : "Choix 23",
            code : "choix23" ,
            children : [
            { title : "Choix 231",
              code : "choix231",
              children : []
            } 
            ]
          }
        ]
      },
      { title : "Choix 3",
        code : "choix3",
        children : [
          { 
            title : "Choix 31",
            code : "choix31",
            children : [
              { 
                title : "Choix 311",
                code : "choix311" ,
                children : []
              },
              { title : "Choix 312",
                code : "choix312" ,
                children : []
              },
              { 
                title : "Choix 313",
                code : "choix313" ,
                children : [
                  { 
                    title : "Choix 3131",
                    code : "choix3131",
                    children : []
                  } 
                ]
              }
            ]
          }
        ] 
      }
    ];*/

    $http.get('data/data.json').success(function(data) {
      $scope.menu = data;
    });

    //Remove the scrollbar on load so it doesn't appear when not necessary
    $('#menu').removeClass('ps-active-y');

    $scope.newLevel = function(levelOpen) {
      var wMe = $('#menu').width();
      $( '#main-content' ).transition({ x:  0.10*levelOpen*wMe + 'px' }, 500, 'ease');
      $( '#menu' ).transition({ x:  10*levelOpen+ '%' }, 500, 'ease');
    };

    $scope.toplel = function() {
      console.log("Singing in the shower");
    }

  });
