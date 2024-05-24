// Q.1 Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

// array=[1,2,3,4,5];
// array1=[];
// function squared(array){
//     for(var i=0;i<array.length;i++){
//         var squre1=array[i]*array[i];
//         array1.push(squre1);
//     }
//     return array1
// }

// const array2=squared(array);
// console.log(array2);

// practice :=>// Q.1 Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.


// array=[1,2,3];
// array1=[];
// function mydata(array){
//  for( var i=0;i<array.length; i++){
//     var array2=array[i]+array[i];
//     array1.push(array2);
//  }
// return array1

// }
//  const array3= mydata(array);
//  console.log(array3);


// Q2.Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

// function palindrome(name){
//     var str=""
//     for(var i=name.length-1;i>=0;i--){
//         // console.log(name[i])
//         str+=name[i];
//     }
//     if(name===str){
//         console.log("True")
//     }
//     else{
//         console.log("False")
//     }
// }
// palindrome("madam")


// practice :=>// Q2.Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).


// function mydata(name){
//  var str=""
// for( var i=name.length-1; i>=0; i--){
//     str+=name[i];
// }
// if(str===name){
//     console.log("true");
// }else{
//     console.log("false");
// }
// }
// mydata("madam")


// Q3.Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).
// array1=[1,2,3,4];
// array2=[3,4,5,6];

// array3=[]

// function common(array1,array2){
//     for(var i=0;i<array1.length;i++){

//         for(var j=0;j<array2.length;j++){

//             if(array1[i]===array2[j]){

//                 array3.push(array1[i])
//             }
//         }
//     }
//     return array3
// }

// const array4=common(array1,array2);
// console.log(array4);

// practice :=>Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).
// array1=[1,2,3,4];
// array2=[3,4,5,6];


// array1=[1,2,3,4];
// array2=[3,4,5,6];
// array3=[];

// function mydata(array1,array2){
//  for(var i=0; i<array1.length; i++){
//     for( var j=0; j<array1.length; j++){
//         if(array1[i]===array2[j]){
//             array3.push(array1[i]);
//         }
//     }
//  }
//  return array3
// }
// const array4=mydata(array1,array2);
// console.log(array4);


// Q4.Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.

// var student = {name: "Alice", age: 25}

// function studentDetails(){
//     console.log(student.name);
// }

//     studentDetails(student)


// practice :=>// Q4.Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.

//  var student={name: "rahul" , age:20}

//  function mydata(student){
//     console.log(student.name);
//  }
//  mydata(student)

// Q5.Write a JavaScript function that takes a number as input and returns an array of its digits.

//  Input: 12345


// var number2=[];
// function mydata(number){
//     var number1;
//     number1=number.toString();
//     for(var i=0;i<number1.length;i++){

//         number3=i+1;
//         number2.push(number3)
//     }
    
//     return number2;
// }
// const numarray=mydata(12345);
// console.log(numarray)


// practice :=>Q5.Write a JavaScript function that takes a number as input and returns an array of its digits.

//     var number4=[];
// function mydata(number){
// var number1;
// number1= number.toString();
// for( var i=0; i<number1.length; i++){
//     number3=i+1;
//     number4.push(number3)
// }
// return number4

// }
//  const number5=mydata(12457)
//  console.log(number5);

// Q6.Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").

// Input: "hello"

// function duplicateletter(str){
//         var str2='';
//     for(var i=0;i<str.length;i++){
        
//         str2 += str[i]+str[i];
        // console.log(str2);
//     }
// }

// duplicateletter("hello")

// practice :=>Q6.Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").

// function mydata(str){
//     var str1="";
//     for (var i=0; i<str.lenght; i++){
//          str1+=str[i]+str[i];
//          console.log(str1);
        
//     }
// }
// mydata("hello")





// Q7.Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.

// Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}]

//pending

// Q8.Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.

// function mydata(sentence){
//     var count=0;
//     for(var i=0;i<sentence.length;i++){

//         if (sentence[i]===" ")
//             count++
//     }
//     count++;
//     console.log(count);
// }

// mydata("This is a sample sentence")



// Q9.Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.

// array=[10, 2, 14, 5, 7]
// function mydata(array){
//     array.sort((a,b)=>a-b);
//     return array[1];
// }

// console.log(mydata(array))


// Q10.Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".
