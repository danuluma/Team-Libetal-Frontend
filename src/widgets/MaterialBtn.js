import * as React from "react";
import Button from "@material-ui/core/Button";

export default class MaterialBtn extends React.Component {
    render() {

        let {onClick, className, content, startIcon, endIcon, style, variant} = this.props;

        return (
            <Button {...this.props} children={content}/>
        );
    }
}