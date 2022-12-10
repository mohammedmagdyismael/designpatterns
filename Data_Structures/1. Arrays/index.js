
module.exports = function () {
     let arr = [3, 4];
     arr.push(1);
     arr.push(2);
     console.log(arr);

     let arr2 = new Array(5);
     arr2[0] = 1;
     arr2[1] = 2;
     arr2[2] = 3;
     arr2[3] = 4
     arr2[4] = 5;
     Object.seal(arr2);
     arr2[0] = 6;
     arr2[5] = 6;
     console.log(arr2);
}

