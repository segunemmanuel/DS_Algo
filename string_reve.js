// Create  function that reverses a string

// Soution 1
function reverse (str){
// Check input

  if(!str || str.length<2 || typeof str!='string'){
    return 'NULL INPUT'
  }

  const backwards=[];
  const   totalItems =str.length-1;
  for(let i=totalItems; i>=0; i--){
     backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join('');
  
}


// Solution 2

function rev(str){
  return str.split('').reverse().join();
}
reverse('Hi my Name is Segun');
