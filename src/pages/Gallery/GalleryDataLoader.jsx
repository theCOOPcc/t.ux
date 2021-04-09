// import { GalleryProps } from './Gallery';
import * as data from './dummy-data.json';

export class GalleryDataLoader {



    constructor() {
        this.components = null;
    }

    load() {
        this.components = {
            components: data.components
        };
    }

    getComponents() {
        return this.components;
    }

}