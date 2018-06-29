var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: "GET",
    data: {
      q: options,
      query: 'react',
      max: 5,
      type: 'video',
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: true
    },
    success: function(data) {console.log(data)},
    error: function() {console.log('we failed')},

  
  });

};

window.searchYouTube = searchYouTube;
