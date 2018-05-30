import React from 'react';
import VideoListItem from './video_list_item';
export default class VideoList extends React.Component {

    renderVideos() {
        return this.props.videos.map((item,index) => {
            return <div style={{cursor: 'pointer'}} onClick={() => {this.props.onSelect(index)}} ><VideoListItem key={index} video={item} /></div>
        })
    }

    render() {
        return (
            <ul className="col-md-4">
                {this.renderVideos()}
            </ul>
        )
    }
}