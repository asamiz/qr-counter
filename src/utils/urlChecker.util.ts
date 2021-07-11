/**
 *
 * @param {string} url - text to check if it url or not
 * @returns {boolean} - a boolean value true if it is url and false if it is not
 */

function urlChecker(text: string): boolean {
  let expression =
    /([a-zA-Z]{2,20}):\/\/([\w_-]+(?:(?:\.[\w_-]+)?))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gim;

  let regex = new RegExp(expression);
  return regex.test(text);
}

export {urlChecker};
