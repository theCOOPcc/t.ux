import React from 'react'

//TODO where is alt text coming from??
export const ImageTile = ({ url }) => {
    return (
      <div>
        <img
          src={
            url
              ? url
              : "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg"
          }
          alt='TUX component'
        />
      </div>
    );
}

// export default ImageTile
