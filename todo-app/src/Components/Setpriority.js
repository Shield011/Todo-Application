import React, { useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Setpriority = (props)  => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className = "form-group">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret className ="priority-dropdown">
                Set Priority
            </DropdownToggle>
            <DropdownMenu className ="priority-dropdown-item">
                <DropdownItem>High</DropdownItem>
                <DropdownItem>Mid</DropdownItem>
                <DropdownItem>Low</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    

        </div> 
    )
}

export default Setpriority

