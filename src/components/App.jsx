class App extends React.Component {
  constructor (props) {
    super(props);
    var boundTitleClick = this.titleClickHandler.bind(this);
    this.boundTitleClick = boundTitleClick;
    this.searchHandler = this.searchHandler.bind(this);

    this.state = {videoList: this.props.videos,
      currentVideo: this.props.videos[0],
      value: 'initial state'
    };
    //this.titleClickHandler = this.titleClickHandler.bind(this);
  }


  titleClickHandler(data) {
    this.setState({currentVideo: data});
  }

  searchHandler(input) {
    // console.log('before', input)
    this.setState({value: input})
    console.log('after', this.state.value)

    window.searchYouTube(input);

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchHandler = {this.searchHandler} value = {this.state.value}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7"> 
            <VideoPlayer videos = {this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} handler={this.boundTitleClick} />
          </div>
        </div>
      </div>
    );
  }
}



// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7"> 
//         <VideoPlayer videos = {props.videos[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos = {props.videos}/>
//       </div>
//     </div>
//   </div>
// );
// qqqqqqqqqqqqqqqqqqqqqq
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
