angular.module('dolittle')
.factory('dolittle', function(){

  function iterate(obj, convert){
    var translatedObj = {};
    for(var prop in obj){
      if((typeof obj[prop] !== null) && (typeof obj[prop] === 'object')){
        translatedObj[convert(prop)] = iterate(obj[prop], convert);
      }
      else {
        translatedObj[convert(prop)] = obj[prop];
      }
    }
    return translatedObj;
  }

  var translate = {
    'to': {}
  };

  translate.to.snake = function toRuby(obj){
    return iterate(obj, function(propName){
      return propName.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
    });
  };

  translate.to.camel = function toJS(obj){
    return iterate(obj, function(propName){
      return propName.split('_')
        .map(function(string){
          return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        })
        .join('');
    });
  };

  return {
    'translate': translate
  };
});
