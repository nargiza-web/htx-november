//Create a Palindrome app in Javascript which will print whether a string is a palindrome or not
//   -1-
function palindrome(word){
    let newword = word.toLowerCase();
    var valid = true;
    
    for( var i= 0, j=newword.length - 1 ; i<newword.length; i++, j--){
        if(newword[i] !== newword[j]){
            valid=false; break;
        }
    }
    return valid;
}

console.log(palindrome("eye"));


/*
- Create an app which removes duplicates from an array 
Example: ["John","Mary", "Alex", "Steve", "Mary", "John"] 
Result should be: ["John","Mary","Alex","Steve"] 
*/
// --2--
let array1=[1, 2, 4, 5,6, 1, 2, 3]
let array2 = [... new Set(array1)]
console.log(array2);

////////////////(continue at home)
function removeDuplicates(array){
    var newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i] !== newArray[i]){
            newArray.push(array[i]);
        }
        else{
            newArray = newArray;
        }
    }
    return newArray;
}
let ar = [1, 2, 3, 1, 4, 2, 5]

console.log(removeDuplicates(ar))

//another solution

var my = ["hello", "hello", "world"]
function deduplicates(data){
    var result=[];
    data.forEach(elem => {
        if(result.indexOf(elem)=== -1){
            result.push(elem)
        }
    })
    return result;
}

console.log(deduplicates(my));

//- Create an app whichs returns true/false depending on if the item is in the array 
// ---3---

var array=["hey", "world", "there"]
function inArray(word){
    for(let i=0; i<array.length; i++){
        if(array[i]===word)
        return true;
    }
    return false
}
console.log(inArray("there"));

//- Create an app which finds the largest number in an array 
//----4----
var number = Math.max(1, 2, 3, 67, 89, 0)
console.log(number)

//- Create an app which finds the smalest number in an array 
//-----5-----
var minNumber = Math.min(1, 2, 345, 65, 0, -3)
console.log(minNumber);

// Create FizzBuzz app
//------6--------
var nums=[1, 2,3, 4, 5, 6, 9, 10, 15, 4, 25, 15]

function fizbuzz(nums){
    nums.forEach(elem => {
        if( elem % 3 == 0 && elem % 5 == 0){
           return console.log(elem + " fizbuzz")
        }
        else if(elem % 3 == 0 ){
            return console.log(elem + " fizz")
        }
        else if (elem % 5 == 0) {
            return console.log(elem+ " buzz")
        }
        else {
            return elem //why element is not returned????
        }
    })
}

console.log(fizbuzz(nums))

//Write an algorithm to sort an array in descending order [4,5,56,1,2,99,34,2,1] 
// ----7-----
var order = [4, 5, 56, 1, 2, 99, 34, 2, 1]
var sorted = order.sort((a, b) => {return b-a});
console.log(sorted)

// In a given sentence find the number of words
//------8-------
var sentence="in a given sentence find the number of words"
var newSentence = sentence.split(" ");
console.log(newSentence.length);

// In a given word find number of vowels
//--------9--------
var theword= "given";
var givenWord=theword.toLowerCase()
var count=0;
var vowels=givenWord.split('');
vowels.forEach(elem => {
    if(elem === "a"){
        return count = count + 1;
    }
    else if(elem === "e"){
        return count++
    }
    else if(elem==="i"){
        return count++
    }
    else if(elem==="o"){
       return count++
    }
    else if(elem ==="u"){
        return count++
    }
    else{
        return count;
    }
    return count;
})
console.log(vowels)
console.log(count)

//Given start time and end time find the different between two times 
//-------10-------------???
var time_start = new Date();
var time_end = new Date();
var value_start = "06:00:00".split(':');
var value_end = "23:00:00".split(":");

time_start.setHours(value_start[0], value_start[1], value_start[2], 0)
time_end.setHours(value_end[0], value_end[1], value_end[2], 0)

console.log(time_end-time_start + " milliseconds") //millisecond

//use javascript to create pyramid;
console.log("    *");
console.log("   ***");
console.log("  *****");
console.log(" *******");
console.log("*********");
