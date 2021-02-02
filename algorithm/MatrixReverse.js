const reverseMatrix = (arr) => {
  if (Array.isArray(arr)) {
    arr.reverse();
    arr.forEach((elem) => {
      reverseMatrix(elem);
    });
  } else return;
  return arr;
};
