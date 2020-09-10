import React, {Component} from "react";
import Select from "@material-ui/core/Select";
import MaterialSelectMenuTitle from "./MaterialSelectMenuTitle";
import MaterialInputLayout from "./MaterialInputLayout";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";


export default class MaterialSelect extends Component {


    getProps() {
        let {
            label,
            color,
            labelId,
            id,
            multiple,
            autoWidth,
            value,
            onChange,
            input,
            renderValue,
            fullWidth
        } = this.props;

        return {
            label,
            color,
            labelId,
            id,
            multiple,
            autoWidth,
            value,
            onChange,
            input,
            renderValue,
            fullWidth
        };
    }


    render() {
        let {
            labelText,
            materialLabel,
            menuTitleText,
            labelId
        } = this.props;


        let props = this.getProps()

        let marginTop = 4;

        if (this.props.style !== undefined) {
            this.props.style["marginTop"] = marginTop;
        }

        return (
            <FormControl {...this.props} >
                {labelText === undefined ? null : <InputLabel shrink id={labelId}>{labelText}</InputLabel>}
                <Select {...this.props}>
                    {this.props.children}
                </Select>
            </FormControl>
        );
    }
}