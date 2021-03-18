import { render } from 'react-dom';
import React from 'react'
import { photos } from './mock-data/photos';


const Photos = props => {
    console.log(props.photos)
    return <div>
        {
            props.photos.map((photo, index) => {
                return <div key={index}>
                    <h1>{photo.title}</h1>
                    <img src={photo.thumbnailUrl} />
                </div>
            })
        }
    </div>
};
render(<Photos photos={photos} />, document.getElementById('root'));