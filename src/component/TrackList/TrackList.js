import React from 'react';
import Track from '../Track/Track';
import './TrackList.css'

class TrackList extends React.Component {
    // Renders the collection of tracks returned in the search results and playlist queue
    render () {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return (
                                <Track
                                    track={track}
                                    key={track.id}
                                    onAdd={this.props.onAdd}
                                    onRemove={this.props.onRemove}
                                    isRemoval={this.props.isRemoval}
                                />
                        );
                    })
                }
            </div>
        )
    }
}

export default TrackList;