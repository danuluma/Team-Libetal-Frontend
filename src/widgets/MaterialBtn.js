import * as React from "react";
import Button from "@material-ui/core/Button";

export default class MaterialBtn extends React.Component {
    render() {

        let {onClick, className, content, startIcon} = this.props;

        return (
            <Button
                onClick={onClick}
                startIcon={startIcon}
                className={className}>
                {content}
            </Button>
        );
    }
}