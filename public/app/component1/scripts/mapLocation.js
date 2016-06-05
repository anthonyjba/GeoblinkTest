(function () {
    'use strict';

   /**
	 * Map Location
	 */
  angular
	  .module('app')
	  .factory('mapLocation', mapLocation);
  
  
  var map = null;
  var geocoder = null;
  
  function mapLocation () {  
      return {
          initialize: initialize,
          showMap : showMap
      }

  

    function initialize()
    {
        google.maps.visualRefresh = true;
        geocoder = new google.maps.Geocoder();
    }

    function getCoordinates(address, callback) {
          var coordinates, coords_obj;
          geocoder.geocode({address : address}, function (results, status) {
            coords_obj = results[0].geometry.location;
            coordinates = [coords_obj.lat(), coords_obj.lng()]
            callback(coordinates);
          })
    }
    
    function showMap(address) {
          
      if (geocoder) {
        
          getCoordinates(address, function (coords){
              var point = new google.maps.LatLng(coords[0], coords[1]);
              var mapOptions = {
                zoom : 16,
                center : point,
                mapTypeId : google.maps.MapTypeId.ROADMAP  
              };
              map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
              
              var marker = new google.maps.Marker({
                position : point,
                map : map,
                title : address            
              })
          })
          
      
      }
    }
  
  }
  //google.maps.event.addDomListener(window, 'load', initialize );

})();