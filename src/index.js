import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
import VideoList from './components/video_list';
const apiKey = 'AIzaSyC-k5ugr0xvDcOkW-pVNDrcmA6svIGEoh0';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({key: apiKey, term: 'black panther'} , (videos) => {
            this.setState({ videos, selectedVideo: videos[0] })
        })
    }

    videoSearch(term) {
        YTSearch({key: apiKey, term: term} , (videos) => {
            console.log(videos)
            this.setState({ videos, selectedVideo: videos[0] })
        })
    }
    
     render() {
         const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)

        return (
            <div>
                <div className="container" >
                    <SearchBar onSearchTermChange={(term) => {videoSearch(term)}} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onSelect={(index) => {this.setState({selectedVideo: this.state.videos[index]})}} videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));