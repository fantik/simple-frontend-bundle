/**
 * Home page scripts.
 *
 * @module Home
 */

import { Resp } from '../modules/dev/_helpers';

export default class Home {
  /**
   * Cache data, make preparations and initialize page scripts.
   */
  constructor() {
    console.log('Yo from home page')
    // initialize after construction
    this.init();
  }

  /**
   * Example method.
   */
  example() {
    // console.log(this.message);
  };

  /**
   * Initialize Home page scripts.
   */
  init() {
    this.example();
  }
}
