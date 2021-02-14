'use strict'
function Person(innitialName){
    var name = innitialName;
    Object.defineProperty(this, 'name', {
        get: function(){
            return name;
        },
        set: function(value){
            name = value;
        }
    });
}
