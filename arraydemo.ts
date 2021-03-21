let fruits: string[] = ['Apple', 'Orange', 'Banana']; 

 

for(var index in fruits)                // for in returns index
{ 
//    console.log(fruits[index]);  // output: Apple Orange Banana
    console.log(index);    
}
/*
for(var i = 0; i < fruits.length; i++)
{ 
    console.log(fruits[i]); // output: Apple Orange Banana
}   */
let arr = [10, 20, 30, 40];

 

for (var val of arr) {                    // for of returns values
  console.log(val); // prints values: 10, 20, 30, 40
}