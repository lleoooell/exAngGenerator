'use strict';

describe('Service: qcmFactory', function () {

  // load the service's module
  beforeEach(module('genAngularApp'));

  // instantiate service
  var qcmFactory;
  beforeEach(inject(function (_qcmFactory_) {
    qcmFactory = _qcmFactory_;
  }));

  it('should do something', function () {
    expect(!!qcmFactory).toBe(true);
  });

});
