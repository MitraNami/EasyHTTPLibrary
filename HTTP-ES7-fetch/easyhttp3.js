/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Mitra Nami
 * @license MIT
 *
 **/

class EasyHTTP {

  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`HTTP Error: status ${response.status}`);
    }
    const users = await response.json();
    return users;
  }


  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw Error(`HTTP Error: status ${response.status}`);
    }
    const newUser = await response.json();
    return newUser;
  }


  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw Error(`HTTP Error: status ${response.status}`);
    }
    const updatedUser = await response.json();
    return updatedUser;
  }


  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw Error(`HTTP Error: status ${response.status}`);
    }
    return 'Successfully Deleted';
  }
  

}