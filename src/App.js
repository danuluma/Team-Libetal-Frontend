import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./modules/home/Home";
import Contributions from "./modules/repos/contributions/Contributions";
import Theme from "./Theme";
import HoCs from "./Hocs";
import Register from "./modules/users/registration/Register";

class AppComponent extends Component {

    static navigate = null;

    render() {
        return (
            <Theme>{
                ({theme, appTheme, classes, styles}) =>
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
                                                       navigator={navigateTo}
                                                       classes={classes}
                                                       appTheme={appTheme}
                                                       theme={theme}
                                                       userDetails={null}/>
                                               )}/>

                                        <Route path="/contributions"
                                               component={() => (
                                                   <Contributions
                                                       navigator={navigateTo}
                                                       classes={classes}
                                                       theme={theme}
                                                       appTheme={appTheme}
                                                   />
                                               )}
                                        />

                                        <Route path="/(r|R)egister"
                                               component={() => (
                                                   <Register
                                                       navigator={navigator}
                                                       classes={classes}
                                                       theme={theme}
                                                       styles={styles}
                                                   />
                                               )}
                                        />
                                        {/*TODO CREATE DASHBOARD*/}
                                        {/*TODO CREATE FINANCIAL ACCOUNT MANAGER*/}
                                        {/*TODO CREATE BUG AND FEATURES REQUEST SECTION*/}
                                    </Switch>
                                );
                            }
                        }</HoCs>
                    )
            }</Theme>
        );
    }

}


const App = withRouter(AppComponent);


export default App;