import React, { Component } from 'react'
import
{
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
    
} from 'reactstrap'
export class SubMenu extends Component 
{
    constructor(props)
    {
        super(props);

        //nella props eventData, saranno presenti tutti i dati
    }

    render() 
    {
        return (
            <React.Fragment>
               <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                   {this.props.eventData.cityName}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={() => this.props.cityChange(this.props.eventData.cityName)} key={"main-info-" + this.props.eventData.cityName}>Info su evento</DropdownItem>
                    {
                        this.props.eventData.eventProgram.map(item =>(
                            <React.Fragment>
                                <DropdownItem  key={"info-date-" + this.props.eventData.cityName + "-" + item.eventDay} onClick={() => this.props.cityChange(this.props.eventData.cityName, item)}>{item.eventDayTitle} - {item.eventDay}</DropdownItem>
                            </React.Fragment>
                        ) 
                        )
                    }
                </DropdownMenu>
               </UncontrolledDropdown>
            </React.Fragment>
        )
    }
}

export default SubMenu
