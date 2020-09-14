import {
  AppBar,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import {
  AccountCircle as AccountCircleIcon,
  Apps as AppsIcon,
  MoreVert as MoreVertIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
} from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/styles";
import React, { Component } from "react";
import Settings from "../../utils/Settings";
import MaterialBtn from "../../widgets/MaterialBtn";
import MaterialDivider from "../../widgets/MaterialDivider";
import MaterialImage from "../../widgets/MaterialImage";
import MaterialSelect from "../../widgets/MaterialSelect";
import MaterialTextField from "../../widgets/MaterialTextField";
import MaterialTextView from "../../widgets/MaterialTextView";
import Separator from "../../widgets/separator";
import InfoBar from "./InfoBar";
import DashboardDetails from "./DashboardDetails";

const btnSuccess = createMuiTheme({
  palette: {
    secondary: {
      main: Settings.colorSuccess,
      dark: Settings.colorSuccessDark,
      contrastText: Settings.textSuccess,
    },
  },
});
const dashBoardTheme = createMuiTheme({
  palette: {
    primary: {
      main: Settings.colorPrimary,
      dark: Settings.colorPrimaryDark,
      contrastText: Settings.textPrimary,
      light: Settings.colorPrimary,
    },
    secondary: {
      main: Settings.colorSecondary,
      dark: Settings.colorSecondaryDark,
      light: Settings.colorSecondary,
      /**TODO eddit for hover states
             light: "#FFFFFF",
             dark: "#FFFFFF",*/
      contrastText: Settings.textSecondary,
    },
    success: {
      main: Settings.colorSuccess,
      dark: Settings.colorSuccessDark,
      contrastText: Settings.textSuccess,
    },
  },
});

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      width: "100%",
      backgroundColor: Settings.colorSecondary,
    },
    "& > a": {
      display: "none",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    padding: 2,
    margin: 4,
    minWidth: 0,
  },
  wrapper: {
    fontWeight: "normal",
    letterSpacing: 0.5,
  },
}))((props) => <Tab {...props} />);

export default class Dashboard extends Component {
  /*context is required*/
  props = {
    context: {},
  };

  state = {
    userDetails: {
      name: "Breimer",
      email: "brymher@gmail.com",
    },
    currentTab: 0,
    dashBoardSearchKey: 0,
    dashBoardSearchValues: [
      {
        id: 0,
        name: "Projects",
      },
      {
        id: 1,
        name: "Issues",
      },
      {
        id: 2,
        name: "Teams",
      },
      {
        id: 3,
        name: "Tasks",
      },
      {
        id: 4,
        name: "Tools",
      },
      {
        id: 4,
        name: "Reviews",
      },
      {
        id: 4,
        name: "Account",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.handleDashboardSearchChange = this.handleDashboardSearchChange.bind(
      this
    );
  }

  handleDashboardSearchChange(e) {
    let value = e.target.value;
    this.setState((prev) => ({ dashBoardSearchKey: value }));
  }

  get userAvatar() {
    return <AccountCircleIcon />;
  }

  get dashBoardSearchValue() {
    return this.state.dashBoardSearchValues[this.state.dashBoardSearchKey].name;
  }

  get navigation() {
    return (
      <AppBar>
        <Toolbar>
          <MaterialImage src={"/images/logo.png"} alt={"Logo"} size={40} />
          <Separator />
          <nav>
            <StyledTabs value={this.state.currentTab} fullwidth={false}>
              {this.state.dashBoardSearchValues.map(({ id, name }, i) => (
                <StyledTab
                  key={i}
                  href={`/dashboard/${name.toLowerCase()}`}
                  label={name}
                />
              ))}
            </StyledTabs>
          </nav>
          <Separator />
          <Paper>
            <Grid container>
              <MaterialSelect
                style={{ position: "relative", marginTop: 6, marginLeft: 6 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.dashBoardSearchKey}
                onChange={this.handleDashboardSearchChange}
                renderValue={(selected) => this.dashBoardSearchValue}
                children={this.state.dashBoardSearchValues.map(
                  ({ id, name }, i) => (
                    <MenuItem value={i}>{name}</MenuItem>
                  )
                )}
              />

              <Divider
                style={{ height: 36, width: 1, margin: 4 }}
                orientation="vertical"
              />
              <MaterialTextField
                style={{ marginTop: 6 }}
                placeholder={"Search"}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Grid>
          </Paper>
          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
          >
            <SettingsIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
          >
            <NotificationsIcon />
          </IconButton>

          <MaterialBtn
            color={"primary"}
            variant={"contained"}
            startIcon={this.userAvatar}
            content={this.toolBarBtnContent}
            endIcon={<MoreVertIcon />}
          />
        </Toolbar>
      </AppBar>
    );
  }

  get toolBarBtnContent() {
    let {
      userDetails: { name, email },
    } = this.state;

    return (
      <Grid container direction={"column"}>
        {/*TODO required link*/}
        <Grid>
          <MaterialTextView
            text={`@${name}`}
            style={{
              fontSize: 12,
              textAlign: "left",
              textTransform: "none",
            }}
          />
        </Grid>
        <Grid>
          <MaterialTextView
            text={email}
            style={{
              textColor: "#000000",
              textTransform: "none",
              fontSize: 10,
              textAlign: "left",
            }}
          />
        </Grid>
      </Grid>
    );
  }

  get account() {}

  get teams() {}

  get issues() {}

  get projects() {
    let { classes } = this.props;
    return (
      <Grid
        container
        item
        direction="row"
        //TODO: Fix these
        style={{ width: "100%", marginTop: "64px" }}
        //   className={classes.root}
      >
        <Grid
          item
          container
          direction="column"
          xs={9}
          //   style={{ background: "green" }}
        >
          <InfoBar
          // classes={classes}
          />
          <DashboardDetails />

          {/* <Typography
            component="div"
            // style={{ backgroundColor: "green", height: "100vh" }}
          ></Typography> */}
          {/* <MaterialDivider orientation={"horizontal"} /> */}
        </Grid>
        <Grid
          item
          xs={3}
          //   style={{ background: "red" }}
        >
          <Grid container alignItems={"flex-end"} justify={"flex-end"}>
            <ThemeProvider
              theme={btnSuccess}
              children={
                <MaterialBtn variant={"contained"} content={"CREATE PROJECT"} />
              }
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  get currentBody() {
    switch (this.state.currentTab) {
      case 0:
        return this.projects;

      case 1:
        return this.issues;
      case 2:
        return this.teams;
      default:
        return this.projects;
    }
  }

  render() {
    const { classes } = this.props;
    console.log(classes.content);

    return (
      <ThemeProvider theme={dashBoardTheme}>
        <div className={classes.root}>
          {this.navigation}

          <main
            className={classes.content}
            style={{ background: Settings.colorPrimary }}
          >
            <div className={classes.toolbar} />
            {this.currentBody}
          </main>
        </div>
      </ThemeProvider>
    );
  }
}
