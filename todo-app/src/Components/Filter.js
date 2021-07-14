import React, { useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Filter = (props)  => {

    
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className = "filter-form">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret className ="filter-dropdown">
                Filter
            </DropdownToggle>
            <DropdownMenu className ="filter-dropdown-item">
                <DropdownItem >Name</DropdownItem>
                <DropdownItem>Date</DropdownItem>
                
            </DropdownMenu>
        </Dropdown>
    

        </div> 
    )
}

export default Filter