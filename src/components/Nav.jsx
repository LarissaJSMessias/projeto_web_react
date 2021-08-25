
import React from "react";
import Header from "./Header";
import Menu from "./Menu";

class Nav extends React.Component {

    constructor (){
        super();
        this.state ={
            clickMenu:true,
        }
    }

    showSidebar = (estado) => {
        this.setState({
            clickMenu:estado
        })
        this.showMenu();
    }

    showMenu = () => {
       const {clickMenu} = this.state;

        clickMenu === true
        ? document.body.classList.add("sidenav-toggled")
        : document.body.classList.remove("sidenav-toggled")


    }

render(){
    return(
        <React.Fragment>
        <Header showSidebar={(estado) => this.showSidebar(estado)}/>
        <Menu/>
        </React.Fragment>
        );
}

}
export default Nav;