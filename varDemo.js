function varDemo() {
    //  var x = 1;
    var x = 1;
    if (true) {
        //  var x = 2; // same variable!
        var x_1 = 2; // same variable!
        console.log("x inside if block : " + x_1); // 2
    }
    console.log("x outside if block : " + x); // 2
}
varDemo();
