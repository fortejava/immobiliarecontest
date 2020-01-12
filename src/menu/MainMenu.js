import React, { Component } from 'react'
import
{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink/*,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
    */
} from 'reactstrap'


//Importo il logo di Huawei
import logo from '../assets/img/logo_huawei.png';


export class MainMenu extends Component 
{
    constructor(props)
    {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);

        //this.setState({ isOpen: false });

        //this.setState((state,props) => ({isOpen : false}));

        
        this.state = ({
            isOpen: false,
            activeItem : ''
        });
    }

    onClick(clickedItem)
    {
        //Verifico se devo aggiornare lo stato del componente e se devo aggiornare il padre

        if (this.state.activeItem !== clickedItem)
        {
            this.setState({ activeItem: clickedItem });

            this.props.cityChange(clickedItem)
        }
    }

    toggle() 
    {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    isActiveItem(itemToCheck)
    {
        return itemToCheck === this.state.activeItem;
    }

    

    render() 
    {
        
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img src={logo} alt="Huawei City Explorer" title="Huawei City Explorer" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {
                                this.props.structure.map(item => (
                                    <NavItem key={"menu-item-" + item.cityName} id={"menu-item-" + item.cityName} >
                                        <NavLink href="#" onClick={() => this.onClick(item.cityName)} active={this.isActiveItem(item.cityName)}>{item.cityName}</NavLink>
                                    </NavItem>)
                                )
                            }
                        </Nav>
                        
                    </Collapse>
                </Navbar>
                
            </React.Fragment>
        )
    }
}

export default MainMenu;
