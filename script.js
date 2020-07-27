(function(angular) {
  'use strict';
angular.module('ngRouteExample', ['ngRoute','dx'])

 .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('BookController', function($scope, $routeParams) {
     $scope.name = 'BookController';
     $scope.params = $routeParams;
     var employees = [{
      "ID": 1,
      "FirstName": "John",
      "LastName": "Heart",
      "Prefix": "Mr.",
      "Position": "CEO",
      "Picture": "images/employees/01.png",
      "BirthDate": "1964/03/16",
      "HireDate": "1995/01/15",
      "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
      "Address": "351 S Hill St."
  }, {
      "ID": 20,
      "FirstName": "Olivia",
      "LastName": "Peyton",
      "Prefix": "Mrs.",
      "Position": "Sales Assistant",
      "Picture": "images/employees/09.png",
      "BirthDate": "1981/06/03",
      "HireDate": "2012/05/14",
      "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
      "Address": "807 W Paseo Del Mar"
  }, {
      "ID": 4,
      "FirstName": "Robert",
      "LastName": "Reagan",
      "Prefix": "Mr.",
      "Position": "CMO",
      "Picture": "images/employees/03.png",
      "BirthDate": "1974/09/07",
      "HireDate": "2002/11/08",
      "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
      "Address": "4 Westmoreland Pl."
  }];
     $scope.dataGridOptions = {
      dataSource: employees,
      showBorders: true,
      columns: [{
              dataField: "Picture",
              allowFiltering: false,
              allowSorting: false,
              cellTemplate: "cellTemplate"
          }, {
              dataField: "Prefix",
              caption: "Title",
              width: 70
          },
          "FirstName",
          "LastName",
          "Position", {
              dataField: "BirthDate",
              dataType: "date"
          }, {
              dataField: "HireDate",
              dataType: "date"
          }
      ]
  };
 })

 .controller('gridController', function($scope, $routeParams) {
     $scope.name = 'gridController';
     $scope.params = $routeParams;
     var caseConsol = this;
     caseConsol.caseId = "P12345";
     caseConsol.isConsolidate = true;
     caseConsol.caseConsolidationInit =  function (component) {
      caseConsol.caseConsolidationComponent = component;
    };
    $scope.relatedcaseExists=false;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/book', {
    templateUrl: 'book/book.html',
    controller: 'BookController'
  })
  .when('/grid', {
    templateUrl: 'dxgrid/dxgrid.html',
    controller: 'gridController',
    controllerAs: 'caseConsol',
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});
})(window.angular);

/*
Copyright 2020 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/