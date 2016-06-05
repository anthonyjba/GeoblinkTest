  //directive function         
  function radarParse(scope, element) {
    
    // watch for changes on scope.data
    scope.$watch("[json, config]", function () {
      if(!scope.json){
        console.log('No Data Found!!');
        return false; 
        }
      var config = scope.config;
      var data = parsejson(scope.json);
      RadarChart.draw(element[0], data, config);  // call the D3 RadarChart.draw function to draw the vis on changes to data or config
    }, true);

    // helper function parsejson to return data to radar chart
    function parsejson(json) {   
      // reshape json data
      var data = [];
      var groups = []; // track unique groups
      json.forEach(function (record) {
        var group = record.type;
        groups.push(group); // push to unique groups tracking
        var obj = { // push group node in data
          group: group,
          axes: []
        }

        for (var item in record.variables.indexes) {
          obj.axes.push({
            axis: item,
            value: parseInt(record.variables.indexes[item]),
            description: item
          });
        };

        data.push(obj);

      });
      return data;
    }

  }
  
  //download svg
  function createImage() {

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
