import React from "react";
import {Typography} from "@material-ui/core";


export default class MaterialTextView extends React.Component {


    props = {
        text: "TextView"
    };

    render() {

        let {
            text,
            ...props
        } = this.props;

        return (
            <Typography {...props}>
                {text}
            </Typography>
        );
    }
}