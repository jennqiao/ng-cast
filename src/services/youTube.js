angular.module('video-player')
  .service('youTube', function($http){
    this.search =  function(query, callback) {
      $http ({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          embeddable: true,
          type: 'video',
          q: query,
          maxResults:10,
          part: 'snippet',
          key: window.YOUTUBE_API_KEY
        }
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        callback(response.data.items);
    
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.   
        console.log("error", response);

      });
    };
  });
