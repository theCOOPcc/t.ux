import React from 'react';
// see comment on line 11
import {ImageTile} from '../../components/ImageTile/ImageTile';

function dynamicallyRenderComponent(kind, props) {
    // import(kind).then((widget) => {
    // widget.render(props);
    // })

    // I hard coded this line to confirm that the above import statement was the failure point for the system. When the above lines are uncommented, the app throws an error that says: Unhandled Rejection(Error): Cannot find module '../components/ImageTile/ImageTile'
    return <ImageTile url='https://cataas.com/cat' />
}

export function GalleryComponent({ kind, props }) {
    return (
        <div className="gallery-item">
            {dynamicallyRenderComponent(kind, props)}
        </div>
    )
}

// I think this article may have a good lead on how to fix this error, but I'm not sure. ×
// https://www.storyblok.com/tp/react-dynamic-component-from-json