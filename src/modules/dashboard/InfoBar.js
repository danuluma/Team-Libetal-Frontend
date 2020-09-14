import {
  AppBar,
  Divider,
  InputBase,
  Toolbar,
  Typography,
  Chip,
  Paper,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from "react";

const styles = (theme) => {
//   console.log(theme.palette);
  return {
    root: {
      flexGrow: 1,
    },
    title: {
      color: theme.palette.text.primary,
    },
    divider: {
      margin: `1em ${theme.spacing(1)}px`,
    },
    status: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      fontSize: "medium",
      color: theme.palette.text.primary,
    },
    alignRight: {
      right: theme.spacing(1),
      position: "absolute",
      display: "inline-flex",
    },
    search: {
      display: "flex",
      position: "relative",
      width: "inherit",
      borderRadius: theme.shape.borderRadius,
      marginLeft: theme.spacing(1),
    },
    searchIcon: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: theme.palette.text.primary,
      width: "100%",
    },
    inputInput: {
      //   width: `calc(75vw - 600px)`,
    },
    searchLabel: {
      //update in the theme
      backgroundColor: "red",
      color: theme.palette.primary.light,
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
    deleteIcon: {
      //update in the theme
      backgroundColor: "red",
      color: theme.palette.primary.light,
    },
    wrap: {
      width: `calc(100% - 270px)`,
      display: "inline-flex",
      justifyContent: "space-between",
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
    },
  };
};

class InfoBar extends Component {
  state = {
    searchFilters: ["By @Joyce", "Features", "Test"],
  };

  handleDelete = (filter) => () => {
    this.setState((prevState) => ({
      searchFilters: prevState.searchFilters.filter(
        (label) => label !== filter
      ),
    }));
  };
  render() {
    const { classes } = this.props;
    const { searchFilters } = this.state;
    return (
      <Paper component="div" className={classes.root} elevation={0}>
        <AppBar position="static" elevation={0}>
          <Toolbar disableGutters className={classes.toolbar}>
            <Typography className={classes.title} variant="h6" noWrap>
              My Projects
            </Typography>
            <Divider
              flexItem
              variant="middle"
              orientation="vertical"
              className={classes.divider}
            />

            <Typography className={classes.wrap}>
              <Typography component="div" className={classes.search}>
                <InputBase
                  placeholder="Search: by me"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                <Typography component="div" className={classes.searchIcon}>
                  <SearchIcon />
                </Typography>
              </Typography>

              <Typography component="div" style={{ display: "inherit" }}>
                {searchFilters.map((label, i) => (
                  <Chip
                    label={label}
                    onDelete={this.handleDelete(label)}
                    // color="red"
                    key={i}
                    classes={{
                      root: classes.searchLabel,
                      deleteIcon: classes.deleteIcon,
                    }}
                  />
                ))}
              </Typography>
            </Typography>

            <Divider
              flexItem
              variant="middle"
              orientation="vertical"
              className={classes.divider}
            />
            <Typography className={classes.alignRight}>
              <Typography className={classes.status} variant="h6" noWrap>
                Urgent
              </Typography>
              <Typography className={classes.status} variant="h6" noWrap>
                Active
              </Typography>
            </Typography>
          </Toolbar>
        </AppBar>
        <Divider
          variant="middle"
          //   className={classes.divider}
        />
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(InfoBar);
