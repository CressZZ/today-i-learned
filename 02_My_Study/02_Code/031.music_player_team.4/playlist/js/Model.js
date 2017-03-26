// Model.js

var Model = (function(global) {
    'use strict';

    // constructor
    function _Model(data) {
        this.data = data;
        this.currentId = 0;
    }

    _Model.prototype = {
        getId: function(){
            return this.currentId;
        },
        setId: function(newId){
            this.currentId = newId;
        },
        nextId: function(){
         this.currentId++;
         if(this.currentId >= this.data.length) {
             this.currentId=0;
         }
         return this.currentId;
        },

        read: function(index) {
            if( typeof index === "undefined" )
                return this.data;

            if(index >= 0)
                return this.data[index];
            else
                return this.data[index+this.data.length];
        },
        update: function() {

        },
        delete: function() {

        },
        size: function() {
            return this.data.length;
        }
    };

    return _Model;
})(window);
