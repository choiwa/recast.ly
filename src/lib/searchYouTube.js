var searchYouTube = (options, callback) => {
  // TODO
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: "GET",
    data: {
      q: 'string',
      max: 5,
      type: 'video',
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: true
    },
    success: function() {console.log('we connected')},
    error: function() {console.log('we failed')},

  
  });



// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'part': 'snippet',
//                  'relatedToVideoId': 'Ks-_Mh1QhMc',
//                  'type': 'video'}), 


};

window.searchYouTube = searchYouTube;
