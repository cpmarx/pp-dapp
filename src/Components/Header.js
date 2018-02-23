import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
    render() {
        return (
            <AppBar  
                title="Projetos DAPP"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}
export default Header;