# sync-loop
Run a sync loop with async functions

## How to use

### Install
```bash
npm install sync-loop
```

### Import and use
```javascript
var syncLoop = require('sync-loop');
var numberOfLoop = 10;
syncLoop(numberOfLoop, function (loop) {
  // loop body
  var index = loop.iteration(); // index of loop, value from 0 to (numberOfLoop - 1)
  doAsyncJob(function(){
    // This is callback of your function
    loop.next(); // call `loop.next()` for next iteration
  })
}, function () {
  console.log("This is finish function")
});
```

