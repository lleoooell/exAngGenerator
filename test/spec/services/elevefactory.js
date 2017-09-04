'use strict';

describe('Service: eleveFactory', function () {

  // load the service's module
  beforeEach(module('genAngularApp'));

  // instantiate service
  var eleveFactory;
  beforeEach(inject(function (_eleveFactory_) {
    eleveFactory = _eleveFactory_;
  }));

  it('should do something', function () {
    expect(!!eleveFactory).toBe(true);
  });

});
