// Code your solution here
const drivers = ["Bobby","Sammy","Sally","Annette","Sarah","Bobby"];

function findMatching(collection,driver) {
  let driverMatch = collection.filter(name => name.toUpperCase() === driver.toUpperCase());

  return driverMatch;
}


console.log(findMatching(drivers,"Bobby"));
console.log(findMatching(drivers,"Sammy"));


function fuzzyMatch(collection,charAt) {
  let sameName = collection.filter(name => name.startsWith(charAt));

  return sameName;
}


console.log(fuzzyMatch(drivers,"Sa"));


const sameDrivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }]



function matchName(collection,name = "") {
  let shareName = collection.filter(driver => driver.name === name);

  return shareName

}  

console.log(matchName(sameDrivers,"Bobby"));