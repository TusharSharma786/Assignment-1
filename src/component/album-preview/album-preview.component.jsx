import React from 'react';
import {Link} from 'react-router-dom';

import './album-preview.styles.scss';

const AlbumPreview = ({albumId,title,url,thumbnailUrl,id}) => {
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                backgroundImage: `url(${url})`
                }}
            />
            <div className='collection-footer'>
                <span className='title'>{title}</span>
                <span className='albumId'>{albumId}</span>
                <span className='id'>{id}</span>
            </div>
            <button><Link className='link' to={`/detail/${id}`}>Details</Link></button>
        </div>
    )
}

export default AlbumPreview;