import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  // const BASE_URL = 'http://157.230.32.23:50502';
  // const BASE_URL = 'http://192.168.0.109:50052';
  // const BASE_URL = 'http://0.0.0.0:50052';
  // const BASE_URL = 'http://68.183.183.254:50502';
  const requestUrl = `${process.env.API_URL}/${url}`;
  return fetch(requestUrl, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => console.log(error));
}
