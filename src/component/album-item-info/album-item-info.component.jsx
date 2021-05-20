import React from 'react';
import data from '../../assets/data';

import './album-item-info.styles.scss';

class AlbumItemInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            album_data : data,
        }
    }
    render() {
        const ids = this.props.match.params.id;
        const showingData = this.state.album_data.find(
            albumData => albumData.id == ids
          );
        // console.log('Showing',showingData);
        const {albumId,id,title,url,thumbnailUrl} = showingData;
        return(
            <div className='container'>
                <span>ThumbnailUrl image: </span>
                <span
                    className='image'
                    style={{
                    backgroundImage: `url(${thumbnailUrl})`
                    }}
                />
                <div className='label-title'>
                    <label>Title :</label>
                    <span>{title}</span>
                </div>
                <div className='label-album-id'>
                    <label>Album Id :</label>
                    <span>{albumId}</span>
                </div>
                <div className='label-id'>
                    <label>ID :</label>
                    <span>{id}</span>
                </div>
                <label>Url</label>
                <div
                    className='image'
                    style={{
                    backgroundImage: `url(${url})`
                    }}
                />
            </div>
        )
    }
}


export default AlbumItemInfo;