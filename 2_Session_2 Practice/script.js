function x(){
    const a = 10;
}

var xyz = 30; // Hoisting will happen here
x(); //functional execution context is created

var x = function(){
    console.log("I am an anonymous function");
}

// In ES6 --> Arroww function introduced

const fn = ()=>{
    // Code
}

console.log(this);

const obj = {
    fn : function(){
        console.log(this);
    },
    fn2: ()=>{
      console.log(this);
    }
};

// Window ---> Global object
obj.fn(); // obj
obj.fn2(); // window

// output of this depend upon how you called not on where you are
function x(){
    console.log(this);
    function y(){
        console.log(this);
        function z(){
            console.log(this);
        }
        z(); // Output : window
    }
    y(); // Output : window
}
x();  // Output : window

const person1 = {
    name : "ram",
    print: function(){
        console.log(this);
    }
}
const person2 = {
    name : "sita",
}

function x(){
    console.log(this);
}

x(); // Window
x.call(person1); // Obj = Person 1
x.call(person2); // Obj = Person 2
person1.print(); // Obj = Person 1
person1.print.call(); // Window
person1.print.call(this); // Window
person1.print.call(person2); // Obj = Person 2
