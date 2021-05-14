const { Key } = require('selenium-webdriver');

module.exports = webDriver => {
  return function sendTab(count = 1) {
    if (!(count >= 1 && count <= 100)) {
      throw new Error('First argument passed to sendTab() must between 1 and 100.');
    }

    let actions = webDriver.actions();

    while (count--) {
      actions = actions.sendKeys(Key.TAB);
    }

    return actions.perform();
  };
};
