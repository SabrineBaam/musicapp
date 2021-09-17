import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
   
    // Provides correct action button. Add or remove track
    renderAction() {
        if(this.props.isRemoval) {
            return (<a className="Track-action" onClick={this.removeTrack}> - </a>);
        }
        return (<a className="Track-action" onClick={this.addTrack}> + </a>);
    }
   
    // Adds track to playlist
    addTrack() {
        this.props.onAdd(this.props.track);
    }

    // Removes track from playlist
    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    // Renders the individual tracks that will be displayed in the search results and playlist queue
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;