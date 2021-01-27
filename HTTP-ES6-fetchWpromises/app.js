const http = new EasyHTTP();

// HTTP GET Request: Get all the users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message));


const newUser = {
  name: 'Mitra Nami',
  username: 'mnami',
  email: 'a.mxnami@gmail.com',
  address:  {
    city: 'kingston',
    street: 'Queens'
  }
};

// HTTP POST Request: Add a new user
// http.post('https://jsonplaceholder.typicode.com/users', newUser)
//   .then(newUser => console.log(newUser))
//   .catch(err => console.log(err.message));


// HTTP PUT Request: Update a user
http.put('https://jsonplaceholder.typicode.com/users/2', newUser)
  .then(user => console.log(user))
  .catch(err => console.log(err.message));