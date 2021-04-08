import React from "react";
import { GalleryComponentProps, GalleryComponent } from "./GalleryComponent";

const Gallery = ({ components }) => {
	return (
		<>
			<h1>The Coop Component Gallery</h1>
			<div>
				{
					(components.length > 0) && components.map((galleryComponent, idx) => (
						<>
							<GalleryComponent key={idx} kind={galleryComponent.kind} props={galleryComponent.props.src, galleryComponent.props.alt} />
						</>

					))
				}
			</div>
		</>
	);
};

export default Gallery;