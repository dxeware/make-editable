angular.module('MakeEditable', [])

  .directive('makeEditable', function() {
    return {
      templateUrl: 'make-editable.html',
      restrict: 'A',
      transclude: true,
      scope: true,
    };
  });
