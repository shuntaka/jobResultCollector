function RPAExecuter(strategy) {
  this.strategy = strategy;
}
RPAExecuter.prototype.execute = (callback) => {
  this.strategy.execute(callback);
};

module.exports = RPAExecuter;
