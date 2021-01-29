const http = new EasyHTTP();


// HTTP GET request: Get all the users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log(users))
  .catch(e => console.log(e));


