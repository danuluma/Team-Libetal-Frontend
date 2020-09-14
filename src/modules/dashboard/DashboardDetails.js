import React, { Component } from "react";
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
  Button,
  Menu,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    pagination: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    ul: {
      //   justifyContent: "flex-end",
    },
  };
};

class DashboardDetails extends Component {
  state = {
    anchorEl: null,
    pagination: 5,
    sortOptions: ["Priority", "State", "Issues"],
    pageSizes: [5, 10, 20, 50],
  };

  handleClick(e) {
    console.log(e);
    this.setState({ anchorEl: e.currentTarget });
  }
  
  handleClose = (pagination) => () => {
    this.setState({ anchorEl: null, pagination });
  };

  handleSelection(e) {
    console.log(e);
  }
  render() {
    const { classes } = this.props;
    const { anchorEl, pageSizes, pagination, sortOptions } = this.state;
    return (
      <Grid item container direction="column" className={classes.root}>
        <Grid item container direction="row">
          <Grid
            item
            sm={8}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {sortOptions.map((option, index) => (
              <Button
                style={{
                  textTransform: "none",
                }}
                aria-controls={option}
                aria-haspopup="true"
                onClick={(e) => this.handleSelection(e)}
                key={index}
              >
                {option}
                <ExpandMoreOutlinedIcon />
              </Button>
            ))}
          </Grid>

          <Grid
            item
            container
            direction="row"
            sm={4}
            className={classes.pagination}
          >
            <Button
              aria-controls="results per page"
              aria-haspopup="true"
              onClick={(e) => this.handleClick(e)}
            >
              {pagination}
              <ExpandMoreOutlinedIcon />
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={(e) => this.handleClose(e)}
            >
              {pageSizes.map((option, i) => (
                <MenuItem onClick={this.handleClose(option)} key={i}>
                  {option}
                </MenuItem>
              ))}
            </Menu>

            <Pagination
              classes={{ ul: classes.ul }}
              count={10}
              shape="rounded"
              siblingCount={0}
              boundaryCount={1}
              size="small"
              onChange={(e, p) => console.log("hh")}
            />
          </Grid>
        </Grid>

        <Grid></Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DashboardDetails);
