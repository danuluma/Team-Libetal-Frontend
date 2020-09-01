import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import Home from "./modules/home/Home";
import Contributions from "./modules/repos/contributions/Contributions";
import Theme from "./Theme";
import HoCs from "./Hocs";

class AppComponent extends Component {

    static navigate = null;

    render() {
        return (
            <Theme>{
                ({theme, appTheme, classes}) =>
                    (
                        <HoCs>{
                            ({navigateTo}) => {
                                // Do this before app render
                                // Or consider passing app to all components
                                App.navigate = navigateTo;

                                return (
                                    <Switch>
                                        <Route exact path="(/|/home)"
                                               component={() => (
                                                   <Home
                                                       classes={classes}
                                                       appTheme={appTheme}
                                                       theme={theme}
                                                       userDetails={null}/>
                                               )}/>

                                        <Route path="/contributions"
                                               component={() => (
                                                   <Contributions
                                                       navigator={navigator}
                                                       classes={classes}
                                                       theme={theme}
                                                       appTheme={appTheme}
                                                   />
                                               )}
                                        />
                                    </Switch>
                                )
                            }
                        }</HoCs>
                    )
            }</Theme>
        )
    }

}


const App = withRouter(AppComponent)


export default App;