import React, {Component} from "react";

export default class MaterialImage extends Component {

    props = {
        src: "",
        alt: "MaterialImage",
        size: undefined
    };

    static IMAGE_SMALL = 24;
    static ICON_SIZE = 24;
    static ICON_SIZE_SMALL = 16;
    static ICON_SIZE_LARGE = 42;

    render() {

        let {src, alt, size, height, width} = this.props;

        if (width !== undefined && height === undefined) {
            // noinspection JSSuspiciousNameCombination
            height = width;
        }

        if (height !== undefined && width === undefined) {
            width = height;
        }

        if (height === undefined && width === undefined) {
            if (size === undefined) size = MaterialImage.IMAGE_SMALL;

            height = size;
            width = size;
        }


        return (
            <img src={src} alt={alt} height={height} width={width}/>
        );
    }
}