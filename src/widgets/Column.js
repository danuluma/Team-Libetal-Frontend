import React, {Component} from "react";
import MaterialGrid from "./MaterialGrid";

export default class Column extends Component {


    render() {

        return (
            <MaterialGrid direction={"column"} {...this.props}/>
        );
    }
}