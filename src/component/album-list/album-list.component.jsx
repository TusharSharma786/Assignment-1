import React from 'react';

import './album-list.styles.scss';

import data from '../../assets/data';
import AlbumPreviewList from '../album-preview-list/album-preview-list.component';

class AlbumList extends React.Component {
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
                    this.state.album_data.map(({albumId,id})=>
                    <AlbumPreviewList key={id} albumId = {albumId} id={id}/>
                    )
                }
            </div>
        )
    }
}

export default AlbumList;