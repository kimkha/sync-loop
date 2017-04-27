module.exports = function (iterations, process, exit) {
  var index = 0,
    done = false,
    shouldExit = false;

  var loop = {
    next: function () {
      if (done) {
        if (shouldExit && exit) {
          return exit(); // Exit if we're done
        }
      }
      // If we're not finished
      if (index < iterations) {
        index++; // Increment our index
        process(loop); // Run our process, pass in the loop
        // Otherwise we're done
      } else {
        done = true; // Make sure we say we're done
        if (exit) exit(); // Call the callback on exit
      }
    },
    iteration: function () {
      return index - 1; // Return the loop number we're on
    },
    break: function (end) {
      done = true; // End the loop
      shouldExit = end; // Passing end as true means we still call the exit callback
    }
  };
  loop.next();
  return loop;
};