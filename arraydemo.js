var fruits = ['Apple', 'Orange', 'Banana'];
for (var index in fruits) // for in returns index
 {
    //    console.log(fruits[index]);  // output: Apple Orange Banana
    console.log(index);
}
/*
for(var i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]); // output: Apple Orange Banana
}   */
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) { // for of returns values
    var val = arr_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
