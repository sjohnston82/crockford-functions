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

function element(arr, fn) {
  // return function () {
  //   if (fn !== undefined) {
  //     let x = fn();
  //     return arr[x];
  //   } else {
  //     fn = fromTo(0, arr.length);
  //   }
  // };

  fn = fn || from(0);

  return function () {
    return arr[fn()];
  };
}

function collect(fn, arr) {
  return function () {
    const x = fn();
    if (x !== undefined) {
      arr.push(x);
    }
    return x;
  };
}

function filter(fn, predicate) {
  return function () {
    x = fn();
    if (x !== undefined && predicate(fn())) {
      push(x);
    }
    return x;
  };
}

function concat(gen1, gen2) {
  return function () {
    const x = gen1();
    if (x === undefined) {
      return gen2();
    }
    return x;
  };
}

function repeat(gen) {
  let x = gen();
  while (x !== undefined) {
    x = gen();
  }
}

function gensymf(str) {
  const x = from(1);
  return function () {
    return str + x();
  };
}

// if not iterating properly, ensure scope is correct

function counter(n) {
  return {
    up: function () {
      return ++n;
    },
    down: function () {
      return --n;
    },
  };
}

function revocable(fn) {
  let revoked = false;

  return {
    invoke: function (x, y) {
      if (!revoked) {
        return fn(x, y);
      } else {
        return undefined;
      }
    },
    revoke: function () {
      revoked = true;
    },
  };
}

function m(val, source) {
  return {
    value: val,
    source: typeof source === "string" ? source : String(val),
  };
}

function addm(m1, m2) {
  return {
    value: m1.value + m2.value,
    source: String(`(${m1.source}+${m2.source})`),
  };
}

function liftm() {
  
}