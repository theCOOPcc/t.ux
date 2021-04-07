import React from 'react'

//TODO where is alt text coming from??
const ImageTile = ({ url }) => {
    return (
        <div>
            <img src={ url } alt='TUX component'/>
        </div>
    )
}

export default ImageTile
