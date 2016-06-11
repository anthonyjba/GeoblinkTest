angular.module('demoApp').service('ServerDataModel', function ServerDataModel() {
    this.data = [
        { id: 1, 
          address : 'address X',
          variables: { population: 9084, is_reference: true}
        },
        { id: 2, 
          address : 'address Y',
          variables: { population: 5759, is_reference: false}
        },
        { id: 3, address : 'address Z',
          variables: { population: 1523, is_reference: false}
        }        
    ];
    
    this.getData = function() {
        return this.data;
    };
    
    this.setData = function(data) {
        this.data = data;
    };
   
    this.findOne = function(id) {
        // find the item that matches that id
        var list = $.grep(this.getData(), function(element, index) {
            return (element.id == id);
        });
        if(list.length === 0) {
            return {};
        }
        // even if list contains multiple items, just return first one
        return list[0];
    };
   
    this.findAll = function() {
        return this.getData();
    };
    
    // options parameter is an object with key value pairs
    // in this simple implementation, value is limited to a single value (no arrays)
    this.findMany = function(options) {
        // find items that match all of the options
        var list = $.grep(this.getData(), function(element, index) {
            var matchAll = true;
            $.each(options, function(optionKey, optionValue) {
                if(element[optionKey] != optionValue) {
                    matchAll = false;
                    return false;
                }
            });
            return matchAll;
        });        
    };
    
    // add a new data item that does not exist already
    // must compute a new unique id and backfill in
    this.addOne = function(dataItem) {
        // must calculate a unique ID to add the new data
        var newId = this.newId();
        dataItem.id = newId;
        this.data.push(dataItem);
        return dataItem;
    };
    
    // return an id to insert a new data item at
    this.newId = function() {
        // find all current ids
        var currentIds = $.map(this.getData(), function(dataItem) { return dataItem.id; });
        // since id is numeric, and we will treat like an autoincrement field, find max
        var maxId = Math.max.apply(Math, currentIds);
        // increment by one
        return maxId + 1;
    };
    
    this.updateOne = function(id, dataItem) {
        // find the item that matches that id
        var list = this.getData();
        var match = null;
        for (var i=0; i < list.length; i++) {
            if(list[i].id == id) {
                match = list[i];
                break;
            }
        }
        if(!angular.isObject(match)) {
            return {};
        }
        angular.extend(match, dataItem);
        return match;
    };
    
    this.deleteOne = function(id) {
        // find the item that matches that id
        var list = this.getData();
        var match = false;
        for (var i=0; i < list.length; i++) {
            if(list[i].id == id) {
                match = true;
                list.splice(i, 1);
                break;
            }
        }
        return match;
    };
    
});