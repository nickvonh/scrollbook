import React from 'react';
import './styles/App.scss';
// import Book from './components/Book';

class App extends React.Component {
  video = React.createRef();
  state = {
    height: 0,
    videoLoaded: false,
    scrollListener: null,
    hash: window.location.hash,
  }

  async fetchVideo() {
    console.log('Fetching video.');
    try {
      const el = this.video.current;
      const file = window.innerWidth < 1024 ? 'video-mobile.mp4' : 'video.mp4';
      const req = await fetch(`assets/${this.state.hash ? this.state.hash.replace('#', '') : file}`);
      // const req = await fetch('assets/video.mp4');
      // const req = await fetch('assets/video-compress.mp4');
      // const req = await fetch('assets/video.webm');
      // const req = await fetch('assets/chrome.webm');
      const blob = await req.blob();
      console.log(req, blob);
      const video = URL.createObjectURL(blob);
      el.src = video;
      el.onloadedmetadata = () => {
        window.removeEventListener('scroll', this.onScroll);
        window.addEventListener('scroll', this.onScroll);
        this.setState({
          videoLoaded: true,
          scrollListener: this.onScroll,
        });
        this.onScroll();
        this.animate();
        el.onloadedmetadata = null;
      }
    } catch (e) {
      return false;
    }
  }

  onScroll = () => {
    const el = this.video.current;
    const position = window.scrollY;
    const pixelsPerSecond = window.innerWidth < 1200 ? 150 : 300;
    const height = el.duration * pixelsPerSecond;

    const positionProgress = position / (height - window.innerHeight);
    let time = positionProgress * el.duration;
        time = time > el.duration - 0.10 ? el.duration - 0.10 : time; // add 0.10 buffer because using the actual end of the video is a bit janky.

    this.state.time !== time && this.setState({
      height,
      time,
    }, () => {
      console.log(this.state.time);
    });
  }

  onHashChange = () => {
    if (window.location.hash !== this.state.hash) {
      this.setState({
        hash: window.location.hash,
      });
    }
  }

  animate = () => {
    const el = this.video.current;
    el.currentTime = this.state.time;
    window.requestAnimationFrame(this.animate);
  }

  componentDidMount() {
    this.fetchVideo();
    window.addEventListener('hashchange', this.onHashChange);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hash !== this.state.hash) {
      this.fetchVideo();
    }
  }

  render(){
    return (
      <div className="App" style={{height: this.state.height}}>
        <video muted loop playsInline autoPlay id="bg-video" ref={this.video} />
        {/* <div className="container">
          <Book setHeight={val => this.setState({height: val})} />
        </div> */}
      </div>
    );
  }
}

export default App;
