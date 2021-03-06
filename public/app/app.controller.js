(function () {
   'use strict';

 /**
 * Main Controller
 */
  angular.module('demoApp.controllers', ['demoApp.services'])
    .directive('radar', radar)
    .controller('MainCtrl', ['dataService', MainCtrl]);

  function MainCtrl(dataService) {
    var vm = this;
    
    //Set Main controller Values
    vm.showGMaps = false;
    vm.urlData = "http://localhost:3000/dataTest/"; //Json data API RESTFul
    /*******************/
         
    vm.init = function() {      

      // initialize controller variables to radar chart
      vm.config = {
        w: 250,
        h: 250,
        facet: false,
        levels: 5,
        levelScale: 0.85,
        labelScale: 0.9,
        facetPaddingScale: 2.1,
        showLevels: true,
        showLevelsLabels: false,
        showAxesLabels: true,
        showAxes: true,
        showLegend: true,
        showVertices: true,
        showPolygons: true
      };
      
      vm.loadDataService();            

    }
    
    vm.loadDataService = function () {

        // promise to get Json
        var promise = dataService.getData(vm.urlData);
        promise.then(function(data) {
            var count = 1;
            data.forEach(function (d) {
              d.type = d.variables.is_reference === true ? 'Reference area' : 'Compared area ' + count++;
            });
            vm.json = data;  
          
        })
        .catch(function() {
            // This is set in the event of an error.
            vm.error = 'There has been an error!';
        });

    }

    vm.panelGMaps = function (address) {
      //mapLocation.
      showMap(address);
      vm.showGMaps=true;
    }

    vm.download = function () {
      createImage();
     }     
     
  }
  
  /**
  * Angular directive <radar>
  */
  function radar() {
    return {
      restrict: "E",
      scope: {
        json: "=",
        config: "="
      },
      link: radarParse
    };
  }

 })();