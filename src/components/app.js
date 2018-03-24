angular.module('video-player')

.component('app', {
   templateUrl:
     'src/templates/app.html',
   controller: ('youTube', function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = (index) => {
        this.currentVideo=this.videos[index];
      };
      this.searchResults = () => {
        console.log('searchResults ran!');
        console.log('this.videos', this.videos);
        youTube.search('surfing');
      };
    })
});
