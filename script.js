//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

// Challange 1
localStorage.setItem('name','poshika');
localStorage.setItem('last','m')
localStorage.setItem('age','18')
localStorage.setItem('country','India')
localStorage.setItem('state','Tamil nadu')
console.log(localStorage)

// Challange 2
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('last'))
console.log(localStorage.getItem('age'))
console.log(localStorage.getItem('country'))
console.log(localStorage.getItem('state'))

// Challange 3
localStorage.removeItem('state')
console.log(localStorage)

// Challange 4
localStorage.clear();
console.log(localStorage)

// Challange 5
var makeString =JSON.stringify(user);
console.log(makeString)





