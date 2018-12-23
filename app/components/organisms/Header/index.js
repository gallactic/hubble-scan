import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Media from 'react-media';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from 'res/Icons';
import Search from 'components/molecules/Search';
import './style.scss';

const TabView = props => (
  <Link to={props.to} className="tab-text">
    <Tab label={props.label} />
  </Link>
);

const MenuView = () => {};
class Header extends React.Component {
  state = {
    checked: false
  };
  render() {
    const { location, routes } = this.props;
    const { checked } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Media query="(max-width: 699px)">
            {matches => (
              <div>
                <div className="main">
                  <Link to={routes[0]}>
                    <img src={Logo} className="logo" alt="logo" />
                  </Link>
                  <div className="tab-view">
                    {matches && (
                      <div>
                        <IconButton
                          onClick={() => {
                            this.setState(state => ({
                              checked: !state.checked
                            }));
                          }}
                        >
                          <MenuIcon />
                        </IconButton>
                      </div>
                    )}
                    {!matches && (
                      <div className="search-view">
                        <div className="search">
                          <Search />
                        </div>
                        <Tabs
                          value={routes.indexOf(location.pathname)}
                          onChange={() => {}}
                        >
                          <TabView to={routes[0]} label="Home" />
                          <TabView to={routes[1]} label="Blocks" />
                          <TabView to={routes[2]} label="Transactions" />
                          <TabView to={routes[3]} label="Accounts" />
                        </Tabs>
                      </div>
                    )}
                  </div>
                </div>

                {matches && (
                  <div className="menu">
                    <Search />
                    <Collapse in={checked}>
                      <List>
                        <ListItem button>
                          <ListItemIcon>
                            <InboxIcon />
                          </ListItemIcon>
                          <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <DraftsIcon />
                          </ListItemIcon>
                          <ListItemText primary="Drafts" />
                        </ListItem>
                      </List>
                    </Collapse>
                  </div>
                )}
              </div>
            )}
          </Media>
        </AppBar>
      </div>
    );
  }
}

const HeaderWithRouter = withRouter(Header);

export default withStyles(null)(HeaderWithRouter);
// export default () => <div><p>asd</p></div>;
