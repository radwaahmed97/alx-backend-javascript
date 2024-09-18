/**
 * App controller class
 */
export default class AppController {
  /**
     * Handles req for `/` route
     * @param {*} req   - request object
     * @param {*} res  - response object
     */
  static getHomepage (req, res) {
    res.statusCode = 200;
    res.send('Hello Holberton School!');
  }
}
