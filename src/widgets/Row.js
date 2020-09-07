import React, {Component} from "react";
import MaterialGrid from "./MaterialGrid";

export default class Row extends Component {


    render() {

        return (
            <MaterialGrid direction={"row"} {...this.props}/>
        );
    }
}