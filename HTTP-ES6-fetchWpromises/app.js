const http = new EasyHTTP();

http.get('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log(users))
  .catch(err => console.log(err.message));

