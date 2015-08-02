# dolittle
Dolittle kindly translates your camelCase JSON object keys into snake_case keys, and viceversa.
It's an angular module meant to minimize the effort in translating camel case JSON keys of JS
clients to snake case, used in some APIs made with Ruby, for example.

## Install it
```sh
$ bower install dolittle
```

## Use it
```javascript
// Include doolittle as a dependency to your module.
angular.module('myapp', ['dolittle'])
.controller('TestCtrl', function(dolittle){
  var camelObj = {
    helloWorld : 'Hello World',
    nestedObject : {
      foo : 'Here be dragons',
      bar : 123
    }
  };
  // Translate to snake_case
  var snake_object = doolitle.translate.to.snake(camelObj);
  // will return
  // {
  //   hello_world : 'Hello World',
  //   nested_object : {
  //     foo : 'Here be dragons',
  //     bar : 123
  //   }
  // }

  doolitle.translate.to.camel(snake_object);
  // will return the original object, with camelCase keys:
  // {
  //   helloWorld : 'Hello World',
  //   nestedObject : {
  //     foo : 'Here be dragons',
  //     bar : 123
  //   }
  // }
});
```

## Thanks to
painpony for pointing out the zoo in this module, and [zubieta](https://github.com/Zubieta) for
the funny name.
