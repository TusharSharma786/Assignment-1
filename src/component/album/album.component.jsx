import React from 'react';

import './album.styles.scss';

import data from '../../assets/data';
import AlbumPreview from '../album-preview/album-preview.component';

class Album extends React.Component {
    constructor() {
        super();
        this.state = {
            album_data : data
        }
    }
    render() {
        return (
            <div className='album'>
                {
                    this.state.album_data.map(({albumId,id,title,url,thumbnailUrl})=>
                    <AlbumPreview key={id} albumId = {albumId} title={title} url={url} thumbnailUrl={thumbnailUrl} id={id}/>
                    )
                }
            </div>
        )
    }
}

export default Album;