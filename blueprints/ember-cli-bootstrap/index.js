module.exports = {
  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-bootstrap and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function() {
    var addonContext = this;

    return this.addBowerPackageToProject('bootstrap', '~3.3')
      .then(function() {
        return addonContext.addBowerPackageToProject('https://github.com/DavidPhilip/bootstrap-for-ember.git#master');
      });
  }
};
