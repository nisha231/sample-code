function varDemo() {
   //  var x = 1;
	let x = 1;
     if (true) {
         //  var x = 2; // same variable!
	     let x = 2; // same variable!
           console.log("x inside if block : "+x);  // 2
     }
     console.log("x outside if block : "+x);  // 2
}

varDemo();