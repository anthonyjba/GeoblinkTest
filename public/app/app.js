(function () {
  'use strict';

  /**
 * Main Controller
 */
  angular.module("app", [])
    .directive("radar", radar)
    .controller("MainCtrl", MainCtrl);

  function MainCtrl($http) {
    var vm = this;
    const urlData = "http://localhost:3000/dataTest/"; //Json data API RESTFul
    
    init();

    function init() {      
      
      $http.get(urlData).success(function (data) {
        var count = 1;
        data.forEach(function (d) {
          d.type = d.variables.is_reference === true ? 'Reference area' : 'Compared area ' + count++;
        });
        
        vm.json = data;
        
      });

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

    }

    vm.download = function () {

      var html = d3.select('svg')
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

      //console.log(html);
      var imgsrc = 'data:image/svg+xml;base64,' + btoa(html);
      var img = '<img src="' + imgsrc + '">';
      d3.select("#svgdataurl").html(img);


      var canvas = document.createElement('canvas'),
          context = canvas.getContext("2d");
      canvas.id = "radar";
      canvas.width = 400;
      canvas.height = 400;

      var image = new Image;
      image.src = imgsrc;
      image.onload = function () {
        context.drawImage(image, 0, 0);

        var canvasdata = canvas.toDataURL("image/png");

        var pngimg = '<img src="' + canvasdata + '">';
        d3.select("#pngdataurl").html(pngimg);

        var a = document.createElement("a");
        a.download = "radar.png";
        a.href = canvasdata;
        document.body.appendChild(a);
        a.click();
      };


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