// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. 

var secretCodeWord1 = "lackadaisical" 
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
// pseudocode:  1. Turn string into an array
//              2. .map through an array and equate the values of "a", "e", "i", "o" to the respective
//                  numbers: 4, 3, 1, 0
//              3. return the array to a string using the join method

const codedLang = (string) => {
    let strArr= string.split("") 
//turns string into an array
		newArr= strArr.map (value => {
//map through array "lackadaisical" and replace a, e, i, o  with 4, 3, 1, 0
			if (value == 'a') {
                return value = 4
            } else if (value == 'e') {
                return value = 3
            } else if (value == 'i') {
                return value = 1
            } else if (value == 'o') {
                return value = 0
            } else {
                return value
            }
})
        return newArr.join("")
}

console.log(codedLang(secretCodeWord1));
console.log(codedLang(secretCodeWord2));

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"
// pseudocode:  1. Create a function that iterates through the array with 
//                  a for-loop 
//              2. Create an empty 
//                  array to hold new values
//              2. Lowercase each index, which is a string and push into empty array "smallArr"
//              3. Add a conditional to return values that include the letter 'a' and push into 
//                  another empty array 

// const aLet = (array) => {
// smallArr=[]
// newArray=[]
//     for (var i=0; i < array.length; i++) {
//         smallArr.push(array[i].toLowerCase())
//     }
// //smallArr=["apple", "banana", "plum", "cherry", "kiwi", "peach"] --> works
//         for (var j=0; j < smallArr.length; j++) {
//             if (smallArr[j].includes('a')) {
//             //if an index of the array, which is a string includes 'a' then 
//                 console.log(smallArr[j]) //ISSUE: only pushes "apple"
//                 return newArray.push(smallArr[j])
//             //return that index and push it into the empty array, newArray 
//             } else {
//             }
//         }
//     return newArray
// }
// console.log(arrayOfWords);
// console.log(aLet(arrayOfWords));

//------------------first attempt was a fail, second attemp succeeded---------------------------

const aLet = (array) => {
    smallArr=[]
        for (var i=0; i < array.length; i++) {
            smallArr.push(array[i].toLowerCase())
        }
    //smallArr=["apple", "banana", "plum", "cherry", "kiwi", "peach"] --> works
        newArray=smallArr.filter (value => {
            return value=value.includes('a')
        })
        return newArray
    }
    console.log(arrayOfWords);
    console.log(aLet(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
//           0  1  2  3  4
var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [5,3,5,5,3]

// pseudocode:  Must add sort method to array
//              1. create a function that iterates through array and checks if three of the coinciding values are the same, thanks to the sort method
//              2. push those values into an empty array, "fullHouseArr"
//              3. iterate through the remaining values to determine if they match
//              4. if they match, push the remaining values into the array holding the three matching values (fullHouseArr)
//              5. if the fullHouseArr.length = 4, console.log "You have a full house"

const letsSee = (array) => {
let sortedArr = array.sort()
//             0  1  2  3  4
//var hand1 = [3, 3, 5, 5, 5]
fullHouseArr=[]
remaining=[]
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 2] == sortedArr[i+1] 
            && sortedArr[i+1] == sortedArr[i]
            && sortedArr[i + 2] == sortedArr[i]) {
            fullHouseArr.push(sortedArr[i+2])
            fullHouseArr.push(sortedArr[i+1])
            fullHouseArr.push(sortedArr[i])
        } else {
            remaining.push(sortedArr[i])
        }
    }
    for (let k = 0; k < remaining.length-2; k++) {
        if (remaining[k + 1] == remaining[k]) {
            fullHouseArr.push(remaining[k])
            fullHouseArr.push(remaining[k+1])
        }
    }
    if (fullHouseArr.length==5){
        return `Congrats, your hand of "${fullHouseArr}" is a full house!`
    } else {
        return "Womp, you do not have a full house"
    }
}
console.log(letsSee(hand1))
console.log(letsSee(hand2))
console.log(letsSee(hand3))
console.log(letsSee(hand4))

