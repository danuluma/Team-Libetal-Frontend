import React, {Component} from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

export default class MaterialTextField extends Component {


    render() {

        let {
            labelText,
            labelId,
            color = "secondary",
            variant,
            onClick,
            label,
            placeholder,
            fullWidth,
            style = {},
            startIcon,
            ...props
        } = this.props;


        return (
            <FormControl {...props} fullWidth={fullWidth}>
                {labelText === undefined ? (<></>) : <InputLabel shrink id={labelId}>{labelText}</InputLabel>}
                {
                    startIcon === undefined ? (
                        <TextField
                            label={label}
                            onClick={onClick}
                            style={style}
                            fullWidth={fullWidth}
                            {...props}
                            children={this.props.children}
                            placeholder={placeholder}

                        />
                    ) : (
                        <TextField
                            label={label}
                            variant={variant}
                            onClick={onClick}
                            style={style}
                            fullWidth={fullWidth}
                            {...props}
                            children={this.props.children}
                            placeholder={placeholder}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {startIcon}
                                    </InputAdornment>
                                )
                            }}
                        />
                    )
                }

            </FormControl>
        );
    }

}