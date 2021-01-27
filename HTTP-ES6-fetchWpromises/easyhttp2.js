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

  get(url) {
    return fetch(url)
      .then(this.handleError)
      .then(res => res.json())
      .then(data => data);    
  }

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






  handleError(res) {
    if (!res.ok) {
      throw Error(`Error: ${res.status} ${res.statusText}`);
    }
    return res;
  }
}