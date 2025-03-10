/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // let element = 0
  //    for (let index = 0; index < rolls.length; index++) {
  //       if(rolls[i].includes(element)){
  //         return true
  //       }
  //       } return false
  //     }
    
  
  
    // USING THE .EVERY() METHOD W/ ARROW FUNCTION
    //1.
    // USING THE TYPEOF SYNTAX
  
    return rolls.every(element => {
      return typeof element === 'number';
    });
  }
  //2.
  // USING ISNAN()
  //   return rolls.every(element => {
  //     return !isNaN(element)
  //   });
  // }
 



/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  for( let items of rolls){
    if(items === value){
      return value
    }
  } return null
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = [];
  for(i = 0; i < rolls.length; i++){
    if(rolls[i] >= lowest){
      newArray.push(rolls[i])
    }
  } return newArray
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let rollCount = {}
  for (let index = 0; index < rolls.length; index++) {
    if (rollCount[rolls[index]]){
      rollCount[rolls[index]]++
  }
  else {
    rollCount[rolls[index]] = 1
  }
  }
  return rollCount
}
// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
