// Big 0 Notation
const nemo =['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(10000).fill('nemo');

function findNemo2(fish) {
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }

}

findNemo2(nemo)

// this function has the Big 0 of O(n) or Linear Time.
// It depends on the number of inputs
// n is an integer mainly the no of inputs in the array or operations because it increaeses the computation time.
// it measures on how fast the runtime grows

const boxes=[0,1,2,3,4,5,6]
function logFirstTwoBoxes(boxes){
console.log(boxes[0]);//O(1)
console.log(boxes[4]);//O(1)
  
}
// Constant time
logFirstTwoBoxes(boxes); //has big O of O(2);

// Calculate the Big O 
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3;//O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;//O(n)
    let q = j * 2;//O(n)
  }

  let whoAmI = "I don't know"; //O(1)
}

// Big O= 4+5n
