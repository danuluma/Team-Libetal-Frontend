import React from "react";
import Divider from "@material-ui/core/Divider";

export default class MaterialDivider extends React.Component {

    props = {
        height: 32,
        spacing: 100
    };


    render() {
        let {orientation = "horizontal", height, spacing, style} = this.props;

        if (orientation === "horizontal")
            style = {...style, height: height, width: 1, marginLeft: spacing, marginRight: spacing};
        else
            style = {...style, height: height, width: 1, marginTop: spacing, marginBottom: spacing};

        return (
            <Divider style={style} orientation={orientation}/>
        );
    }
}