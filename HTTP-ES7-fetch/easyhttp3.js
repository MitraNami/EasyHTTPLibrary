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




}