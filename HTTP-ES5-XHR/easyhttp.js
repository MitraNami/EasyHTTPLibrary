/*

fake api from: https://jsonplaceholder.typicode.com/
How to use the library:

Get Posts:
http.get(
  'https://jsonplaceholder.typicode.com/posts',
  function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      console.log(posts);
    }
  }
);

Get a single Post (with id 1):
http.get(
  'https://jsonplaceholder.typicode.com/posts/1',
  function(err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);

Create a Post:
http.post(
  'https://jsonplaceholder.typicode.com/posts',
  {
    title: 'foo',
    body: 'bar',
    userId: 1,
  },
  function(err, info) {
    console.log(info);
  }
);

Update a Post:
http.put(
  'https://jsonplaceholder.typicode.com/posts/1',
  {
    title: 'new title',
    body: 'new body',
    userId: 3
  },
  function(err, info) {
    console.log(info);
  }
);

Delete a Post:
http.delete(
  'https://jsonplaceholder.typicode.com/posts/1',
  function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  }
);

*/


function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function(api, callback) {
  this.http.open('GET', api, true);

  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`, null);
    }
  };

  this.http.send();
};


// Make an HTTP POST Request
EasyHTTP.prototype.post = function(api, data, callback) {

  const body = JSON.stringify(data);

  this.http.open('POST', api, true);

  this.http.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  const self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(body);
};


// Make an HTTP PUT Request
EasyHTTP.prototype.put = function(api, data, callback) {

  const body = JSON.stringify(data);

  this.http.open('PUT', api, true);

  this.http.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  const self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(body);

};

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = function(api, callback) {
  
  this.http.open('DELETE', api, true);

  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback(`Error: ${self.http.status}`, null);
    }
  };

  this.http.send();
};