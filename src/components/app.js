angular.module('video-player')

  .component('app', {
    templateUrl:
     'src/templates/app.html',
    controller: ('youTube', function(youTube) {
      this.$onInit = function() {
        this.videos = [];
        this.currentVideo = {};
        this.searchResults('cats', this.result);
      };

      this.selectVideo = (index) => {
        this.currentVideo=this.videos[index];
      };
      // this.searchResults = (query, callback) => {
      //   console.log('callback', callback);
      //   youTube.search(query, callback);
      // };
      this.searchResults = youTube.search;
      this.result = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      };
    })
  });
