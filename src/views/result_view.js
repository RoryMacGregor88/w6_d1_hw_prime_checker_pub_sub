const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:result-calculated', (evt) => {
    const primeResult = evt.detail;
    this.displayResult(primeResult);
  });
};

ResultView.prototype.displayResult = function(primeTrueFalse) {
  const resultElement = document.querySelector('#result');

  resultElement.textContent = `Prime number: ${primeTrueFalse}.`;
};

module.exports = ResultView;
