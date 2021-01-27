const http = new EasyHTTP();

// // Get Posts
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

// // Get a single Post (with id 1)
// http.get(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   function(err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// // Create a Post
// http.post(
//   'https://jsonplaceholder.typicode.com/posts',
//   {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   },
//   function(err, info) {
//     console.log(info);
//   }
// );

// // Update a Post
// http.put(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   {
//     title: 'new title',
//     body: 'new body',
//     userId: 3
//   },
//   function(err, info) {
//     console.log(info);
//   }
// );

// // Delete a Post
// http.delete(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   function(err, info) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//     }
//   }
// );