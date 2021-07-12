import React, { useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Setpriority = (props)  => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div class = "form-group">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
                Set Priority
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>High</DropdownItem>
                <DropdownItem>Mid</DropdownItem>
                <DropdownItem>Low</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    

        </div>
    )
}

export default Setpriority

