Array.prototype.uniq = function() {
  let newArray = [];
  this.forEach( el => {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  });
  return newArray;
}

Array.prototype.twoSum = function() {
  let newArray = [];
  this.forEach((el1, idx1) => {
    this.forEach((el2, idx2) => {
      if (idx1 < idx2 && el1 + el2 === 0) {
        newArray.push([idx1, idx2]);
      }
    });
  });
  return newArray;
}

Array.prototype.transpose = function() {
  let newArray = [];
  for (let i = 0; i < this[0].length; i++) {
   newArray.push([]);
  }

  this.forEach( (row, idx1) => {
    row.forEach( (col, idx2) => {
      newArray[idx2].push(col);
    })
  } )
  return newArray;
}
