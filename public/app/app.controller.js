(function(){
   'use strict';

    /**
	 * Main Controller
	 */
  angular.module("app", [])
    .directive("radar", radar)
    .controller("MainCtrl", MainCtrl);
    
  function MainCtrl($http){
    var vm = this;
    init();
    
    function init(){
      // initialize controller variables
      vm.examples = [
        "data_the_avengers",
        "data_plant_seasons",
        "data_car_ratings"
      ];
      vm.exampleSelected = vm.examples[0];
      // vm.getData = getData;
      // vm.selectExample = selectExample;

      // initialize controller functions
      //vm.selectExample(vm.exampleSelected);
      
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
      console.log(vm.config);
      
      $http.get("data/data.json").success(function(data) {
        vm.json = data;
      });
      
    }
    
    
  
  }
  
  // directive function sunburst
    function radar() {
      return {
        restrict: "E",
        scope: {
          json: "=",
          config: "="
        },
        link: radarDraw
      };
    }
  
})();