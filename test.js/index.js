// Question 1:
// Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

// Input: [1, 2, 3, 4, 5]

//  var number=[1,2,3,4,5];
//  var newArray=[];
//  var square=function(number){
//    for(var i=0; i<number.length; i++){
//     //  newArray=[];
//      newArray(array[i]*array[i]);
//    }
   
// }
//  console.log(square(newArray));


// Question 3:
// Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).

// Input: [1, 2, 3, 4], [3, 4, 5, 6]


 var firstList =[1, 2, 3, 4];
 var secondList =[3, 4, 5, 6];
 function CombineNumber(firstList,secondList){
 var newArray=[];
 
  for(var i=0; i<firstList.length; i++){
    for( var j=0; j<secondList.length; j++);{
        if(firstList[i]===secondList[j]){
            newArray.push(firstList[i]);
        }
    }
  }
  return newArray;
}
 console.log(CombineNumber(firstList,secondList));

