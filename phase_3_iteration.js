Array.prototype.bubbleSort = function() {
  let newArray = this;
  let sorted = false;

  while(!sorted) {
    sorted = true;
    newArray.forEach((el, idx) => {
      if (idx < newArray.length - 1 && el > newArray[idx+1]) {
        sorted = false;
        newArray[idx] = newArray[idx+1];
        newArray[idx+1] = el;
      }
    });
  }

  return newArray;
}

String.prototype.substrings = function() {
  let subs = [];
  this.split('').forEach( (ch, idx) => {
    let idx2 = idx + 1;
    while (idx2 <= this.length) {
      subs.push(this.slice(idx,idx2));
      idx2++;
    }
  })
  return subs;
}