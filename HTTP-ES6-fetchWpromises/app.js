const http = new EasyHTTP();

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


http.post('https://jsonplaceholder.typicode.com/users', newUser)
  .then(newUser => console.log(newUser))
  .catch(err => console.log(err.message));