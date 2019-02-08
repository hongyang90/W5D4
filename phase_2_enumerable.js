Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback) {
  let newArray = [];
  this.myEach((el) => { newArray.push(callback(el)) });
  return newArray;
}

Array.prototype.myReduce = function(callback, initialValue=0) {
  let arr = this;
  if (initialValue === 0) {
    initialValue = arr.shift();
  }

  arr.myEach((el) => {
    initialValue = callback(initialValue, el);
  });

  return initialValue;
}