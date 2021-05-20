import React from 'react';
import {Link} from 'react-router-dom';

import './album-preview-list.styles.scss';

const AlbumPreviewList = ({albumId,id,albumIds,dispatch}) => {
    return (
        <div className='collection-list-item'>
            <button><Link className='link' to={`/detail/${id}`}>albumId - {albumId}   id - {id}</Link></button>
        </div>
    )
}

export default AlbumPreviewList;