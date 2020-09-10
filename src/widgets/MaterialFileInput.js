import React, {Component} from "react";
import FormControl from "@material-ui/core/FormControl";
import {TextField} from "@material-ui/core";
import MaterialInputLayout from "./MaterialInputLayout";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InputAdornment from "@material-ui/core/InputAdornment";

export default class MaterialFileInput extends Component {

    state = {
        valueText: "Chose File"
    };

    render() {

        let {
            disabled = false,
            color = "primary",
            labelText = "Cv/Portfolio",
            fullWidth = false,
            style = {},
            type,
            ...props
        } = this.props;

        style = {
            ...style,
            cursor: "pointer"
        };

        type = "file";

        return (
            <MaterialInputLayout>
                <FormControl {...props} >
                    <TextField
                        style={style}
                        {...props}
                        type={type}
                        disabled={disabled}
                        fullWidth={fullWidth}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Button
                                        startIcon={<AttachFileIcon/>}
                                        disabled={disabled}
                                        variant={"contained"} color={color}>
                                        {labelText}
                                    </Button>
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>
            </MaterialInputLayout>
        );
    }
}