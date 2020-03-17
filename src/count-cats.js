module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  let k=0;
  for (let j=0; j<matrix.length; j++){
    for (let i=0; i<(matrix[j]).length; i++){
      //console.log(matrix[j][i]);
      if (matrix[j][i] == '^^')
       k++;   
      
    } 
}
return (k);
};
