function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

const mul = (x, y) => {
  return x * y;
};

const identity = (x) => {
  return x;
};

function identityf(x) {
  return function () {
    return x;
  };
}

function addf(x) {
  return function (y) {
    return x + y;
  };
}

const liftf = (fn) => {
  return function (x) {
    return function (y) {
      return fn(x, y);
    };
  };
};

// const curry = (fn, x) => {
//   return function (y) {
//     return fn(x, y);
//   };
// };

const curry = (fn, x) => (y) => fn(x, y);

const twice = (fn) => (x) => fn(x, x);

const reverse = (fn) => (x, y) => fn(y, x);

const composeu = (fn1, fn2) => (x) => fn2(fn1(x));

const composeb = (fn1, fn2) => {
  return function (x, y, z) {
    let n1 = fn1(x, y);
    return fn2(n1, z);
  };
};

function limit(fn, n) {
  let count = 0;

  return function (x, y) {
    if (count < n) {
      count++;
      return fn(x, y);
    }
  };
}

function from(n) {
  let counter = n;
  return function () {
    return counter++;
  };
}

function to(fn, n) {
  return function () {
    const val = fn();
    if (val < n) {
      return val;
    }
  };
}

function fromTo(x, y) {
  let counter = x;
  return function () {
    if (counter < y) {
      return counter++;
    }
  };
}


