'use strict';

describe('Controller: ElevesCtrl', function () {

  // load the controller's module
  beforeEach(module('genAngularApp'));

  var ElevesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ElevesCtrl = $controller('ElevesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ElevesCtrl.awesomeThings.length).toBe(3);
  });
});
