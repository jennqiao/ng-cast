angular.module('video-player')

.component('search', {
  bindings: {
    search: '<',
    result: '<'
  },
  // TODO
  templateUrl:
     'src/templates/search.html'
});
