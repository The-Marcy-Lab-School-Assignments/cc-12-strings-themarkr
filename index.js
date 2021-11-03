//write your code here
/*
input a string parameter to the function
set up an empty string called reversed to put all the individual characters in
for loop to iterate through each character in the string starting from (string.length -1) up to an including 0 and counting down
for each i, index into that string with i and add that character into the new string with +=
return that string
*/
const reverseString = (string) => {
    let reversedString = "";
    for (let i = (string.length -1); i >=0; i--){
        reversedString += string[i];
    }
    return reversedString;
};

console.log(reverseString("hello"))