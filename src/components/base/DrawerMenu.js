// src/base/DrawerMenu.js

import React from 'react';
import PropTypes from 'prop-types';

import _ from 'underscore';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import InboxIcon from '@material-ui/icons/MoveToInbox';

import SidebarMenuDict from '../../sidebar/SidebarMenuDict';
import SidebarCategoryName from '../../sidebar/SidebarCategoryName';

import StickyBoardColors from '../../theme/StickyBoardColors';

import Const from '../../constants/Const';

const styles = theme => ({
    drawerContainer: {
        height: '100%',
    },
    menuItemList: {
        width: '100%',
        maxWidth: 360,
    },
    menuCategory: {
        color: StickyBoardColors.colorMediumDark,
        fontWeight: 400,
        fontSize: 12,
    },
    menuItem: {
        marginTop: 0,
    },
    menuItemSelected: {
        marginTop: 0,
        background: StickyBoardColors.drawerMenuSelectedBackground,
        borderRight: '10px solid ' + StickyBoardColors.primaryColor,
    },
    menuItemIcon: {
        color: StickyBoardColors.colorDark,
    },
    menuItemText: {
        color: StickyBoardColors.colorDark,
        fontWeight: 500,
        fontSize: 14,
    },
    menuItemTextSelected: {
        color: StickyBoardColors.colorDark,
        fontWeight: 700,
        fontSize: 14,
    },
    bottomArea: {
        // height: 160,
        height: 0,
        backgroundColor: StickyBoardColors.drawerContainerBackground,
    }
});

class DrawerMenu extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            permittedMenuDict: {},
        }
    }

    componentDidMount () {
        this.updatePermittedMenuDict(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updatePermittedMenuDict(nextProps);
    }

    updatePermittedMenuDict = (props) => {
        // Temporarily disabled
        if (props.isSuperuser) {
            this.setState({ permittedMenuDict: SidebarMenuDict });
        } else {
            this.updatePermittedMenuList(props.permissionKeyArray);
        }
    }

    onSignOutBtnClicked = () => {
        console.log('clicked')
    }

    updatePermittedMenuList = (permissionKeyArray) => {
        var permittedMenuDict = {};

        Object.keys(SidebarMenuDict).map((sidebarCategoryKey) => {
            let categoryMenus = SidebarMenuDict[sidebarCategoryKey];

            var categoryMenuArray = [];
            categoryMenus.map((menu) => {
                if (!menu.need_permission || _.contains(permissionKeyArray, menu.url)) {
                    categoryMenuArray.push(menu);
                }
            });

            if (categoryMenuArray.length > 0) {
                permittedMenuDict[sidebarCategoryKey] = categoryMenuArray;
            }
        });

        this.setState({ permittedMenuDict: permittedMenuDict });
    }

    render () {
        const { classes, theme } = this.props;
        const { permittedMenuDict } = this.state;

        return (
            <div className={classes.drawerContainer}>
                {/* Drawer Menus */}
                {Object.keys(permittedMenuDict).map((sidebarCategoryKey) => {
                    let categoryMenus = permittedMenuDict[sidebarCategoryKey];

                    return (
                        <div key={sidebarCategoryKey}>
                            <Divider />
                            <List
                                className={classes.menuItemList}
                                subheader={categoryMenus.length > 1 ?
                                    <ListSubheader
                                        className={classes.menuCategory}
                                        disableSticky={true}>
                                        {SidebarCategoryName[sidebarCategoryKey]}
                                    </ListSubheader> : null}>
                                {categoryMenus.map((menu) => {
                                    let isSelected = menu.url === window.location.pathname;

                                    return (
                                        <ListItem
                                            button
                                            key={menu.value}
                                            className={isSelected ? classes.menuItemSelected : classes.menuItem}
                                            component='a'
                                            href={menu.url}>
                                            <ListItemIcon
                                                color="inherit"
                                                className={classes.menuItemIcon}>
                                                {menu.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                inset
                                                disableTypography={true}
                                                primary={menu.title}
                                                className={isSelected ? classes.menuItemTextSelected : classes.menuItemText}/>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </div>
                    )
                })}

                {/* Bottom area */}
                <div className={classes.bottomArea}>
                </div>
            </div>
        )
    }
}

DrawerMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DrawerMenu);
