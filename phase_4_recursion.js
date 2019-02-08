function range(start, end) {
  if (start === end) {
    return [start];
  }

  return range(start, end-1).concat([end]);
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return sumRec(arr.slice(1)) + arr[0];
}

// version 1
function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

// version 2
function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else if (exp === 1){
    return base;
  }

  if (exp % 2 === 0 ) {
    return Math.pow(exponent2(base, exp / 2),2);
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2),2);
  }

}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }
  let result = fibonacci(n - 1);
  return result.concat(result.slice(result.length - 1)[0] + result.slice(result.length - 2)[0]);
}

function deepDup(arr) {
  let result = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      return result.concat(deepDup(el));
    } else {
      result.push(el);
    }
  });
  return result;
}