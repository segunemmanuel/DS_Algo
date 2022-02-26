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
