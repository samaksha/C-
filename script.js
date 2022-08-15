// var arr = [1,2,3,4];
// var obj = {name:"sam",age:arr};
// var arr2 = arr.splice(-2,4);

// console.log(obj.age);
// console.log(arr2);

//iterate keys in objs
// var obj = {"p":100,"p1":200,"p2":300};
// var keys = Object.keys(obj);
// var arr = [];
// for(var i in obj)
//     arr.push(i);
// console.log(arr);
// var obj2 = obj;
// obj2 = 2;
// console.log(obj2);
// console.log(obj == obj2);

//Arrays are objects with length as an extra prop
// var arr = [10,20,30];
// var obj = {"0":10,1:20,2:30};
// console.log(arr);
// console.log(obj);
// arr["p"] = 5;
// // the lenght remains same only increases when we add int props
// arr["14"] = 6;
// // now the lenght becomes 15
// console.log(arr);

// var timer = 10;
// function countDown()
// {
//     console.log(timer);
//     timer--;
//     if(timer == -1)
//         clearInterval(Timer);
// }
// window.setTimeout(countDown);
// //window.setTimeout will work even without a browser.
// var Timer = setInterval(countDown);

//Use ES6 spread operator to send multiple arguments
// function func(...args)
// {
//     for(var i in args)
//         console.log(i,args[i]);
// }

// var arr = [5,6,7];
// func(1,2,3,4,arr);

// DOM is Document Object Model and every element of the HTML page is in the form of a tree structure
// even the Document is contained by the window object which has loads of other properties like screen,document etc.
// Basically the entire window object represents a window in a browser and acts as an API between the window and us.

// var heading = document.getElementById('one'); //May return NULL if the DOM was not loaded.
// var heading2 = document.querySelector("#two"); //Try to shift the script after the body tag can help
// var headings = document.querySelectorAll("#two");
// console.log(heading,heading2,headings);
// console.log(navigator); //Browser Info

// Event Handling and func is the Event Handler. func is the function reference func() is a function call;
// We tend to seperate js and html because if js is not changing frequently we can cache it.
// var func = function () {
//   cnt++;
//   console.log(cnt);
// //   console.log(event);
// };
// var button = document.getElementById("btn");
// var button2 = document.getElementById("btn2");
// var cnt = 0;
// button.addEventListener("click", func);

// button2.addEventListener("click", function () {
//   alert("working " + cnt);
// });

// var input = document.getElementById("input1");
// console.log(input);
// input.addEventListener("keypress",func());


var info = {city:"san"};
info.city = undefined;
console.log(info.city);

