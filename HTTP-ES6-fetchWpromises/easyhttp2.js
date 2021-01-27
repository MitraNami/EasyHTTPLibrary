/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Mitra Nami
 * @license MIT
 *
 **/

class EasyHTTP {

  // Make an HTTP GET Request
  get(url) {
    return fetch(url)
      .then(this.handleError)
      .then(res => res.json())
      .then(data => data);    
  }

  // Make an HTTP POST Request
  post(url, data) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
      .then(this.handleError)
      .then(res => res.json())
      .then(data => data);
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then(this.handleError)
    .then(res => res.json())
    .then(data => data);
  }




  handleError(res) {
    if (!res.ok) {
      throw Error(`Error: ${res.status} ${res.statusText}`);
    }
    return res;
  }
}