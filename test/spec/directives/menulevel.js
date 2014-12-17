'use strict';

describe('Directive: menuLevel', function () {

  // load the directive's module
  beforeEach(module('menuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menu-level></menu-level>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the menuLevel directive');
  }));
});
