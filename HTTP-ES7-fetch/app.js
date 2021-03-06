const http = new EasyHTTP();


// HTTP GET request: Get all the users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(users => console.log(users))
//   .catch(e => console.log(e));


const newUser = {
  name: 'Mitra Nami',
  email: 'a.mxnami@gmail.com',
  addres: {
    city: 'Kingston',
    street: 'Johnson'
  }
};


// HTTP POST request: Create a new user
// http.post('https://jsonplaceholder.typicode.com/users', newUser)
//   .then(newUser => console.log(newUser))
//   .catch(e => console.log(e));


// HTTP PUT request: Update a new user
// http.put('https://jsonplaceholder.typicode.com/users/3', newUser)
//   .then(user => console.log(user))
//   .catch(e => console.log(e));


// HTTP DELETE request: Delete a user
http.delete('https://jsonplaceholder.typicode.com/users/3')
  .then(msg => console.log(msg))
  .catch(e => console.log(e));
