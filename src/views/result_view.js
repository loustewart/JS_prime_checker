const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result', (event) => {
    const numberIsPrime = event.detail;
    this.displayResult(numberIsPrime);
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement =document.querySelector('#result');
  resultElement.textContent = `${result}`;
};

module.exports = ResultView;
