'use strict';

describe('Controller: QcmCtrl', function () {

  // load the controller's module
  beforeEach(module('genAngularApp'));

  var QcmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QcmCtrl = $controller('QcmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QcmCtrl.awesomeThings.length).toBe(3);
  });
});
