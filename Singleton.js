// A singleton class have only 1 instance, accessible globally through a single point

//  OR

// There should be only 1 object of everyclass and can be reused everywhere

// things to remeber:
// 1. Early Initialization
// 2. Lazy Initialization
// 3. Thread Safe
// 4. Double Checking

// Example: Logging, cacheing, configuration Setting

const singleton = (function () {
  let instance;

  let createObject = () => {
    let object = new Object();
    return object;
  };

  return {
    getInstance: function () {
      if (!instance) {
        instance = createObject();
      }
      return instance;
    },
  };
})();

const run = () => {
  let obj1 = singleton.getInstance();
  let obj2 = singleton.getInstance();
  console.log(obj1 == obj2);
};

run();
