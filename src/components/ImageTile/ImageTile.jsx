export function ImageTile(url) {
    // TODO: insert logic to deal with:
    //    1.) undefined url
    //    2.) null url
    //    3.) empty url
    //
    // One approach here: supply a default image
    const defaultImage = "blah.com/foo.jpg";
    url = url === undefined ? defaultImage : url;
    url = url === null ? defaultImage : url;
    url = url === "" ? defaultImage : url;

    return (
        <div>
            <img src={ url } alt='TUX component'/>
        </div>
    )
}
