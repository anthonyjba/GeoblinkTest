  //directive function         
  function radarParse(scope, element) {
    
    // watch for changes on scope.data
    scope.$watch("[json, config]", function () {
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
