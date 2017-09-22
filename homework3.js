/* 
Student: Garegin Asatryan
Homework: #3
Class: Introduction to CS
*/

// A function that takes three arguments and returns the result of some set of operations using those arguments
const threeArg = function(num1, num2, num3){
  const value = num1 * num2 / num3 ;
  return value;
};

// A function that takes no arguments and returns something
 const noArg = function(){
   const noArgReturn = 'something';
   return noArgReturn;
 };
 
// A function that takes arguments, does something but does not return anything
const noReturn = function(word1, word2, word3){
  const doesSomething = word1 + word2 + word3 ;
};

// A function called fullName that takes as argument first name and last name and returns the full name of the person (first name concatenated with last name with a space in between
const fullName = function(firstName, lastName){
  return firstName + " " + lastName;
};

// A function that takes three strings and returns the string that is the longest.
const theLongest = function(str1, str2, str3){
   if (str1.length > str2.length && str1.length > str3.length){
     return str1;
   }else if (str2.length > str1.length && str2.length > str3.length){  
     return str2;
   }else if (str3.length > str1.length && str3.length> str2.length ){
     return str3;
   }else if (str1.length === str2.length === str3.length){   // from line 37-44 checks equality
    return str1 + " " + str2 + " " + str3; 
   }else if (str1.length === str2.length && str1.length > str3.length ){
     return str1 + " " + str2;
   }else if (str1.length === str3.length && str1.length > str2.length){
     return str1 + " " + str3;
   }else if (str2.length === str3.length && str2.length > str1.length){
     return str2 + " " + str3;
   }
};

// A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
const twoNmb = function(nmb1, nmb2){
  if (nmb1 === nmb2){
    return "0";
  }else if (nmb1 > nmb2){
    return "1";
  }else{
    return "-1" ;
  }
};

// A function that takes three inputs and returns the first truethy value
const firstTruthy = function(val1,val2,val3){
 const trthy = (val1 || val2 || val3);
    return trthy;
};