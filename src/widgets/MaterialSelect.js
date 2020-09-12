import React, {Component} from "react";
import Select from "@material-ui/core/Select";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";


export default class MaterialSelect extends Component {


    props = {
        style: {}
    };

    get basicInput() {
        let {
            labelId,
            labelText,
            label,
            children,
            ...props
        } = this.props;

        return (
            <Select {...props}>
                {children}
            </Select>
        );
    }

    get input() {
        return this.props.labelId === undefined ? this.basicInput : this.withLabel;
    }

    get withLabel() {
        let {
            labelId,
            labelText,
            label,
            children,
            ...props
        } = this.props;

        return (
            <>
                <InputLabel shrink id={labelId}>{labelText}</InputLabel>
                <Select {...props}>
                    {children}
                </Select>
            </>
        );
    }

    render() {
        let {

            labelText,
            materialLabel,
            menuTitleText,
            labelId,
            style = {},
            children,
            ...props
        } = this.props;

        return (
            <FormControl {...props} >
                {this.input}
            </FormControl>
        );
    }
}