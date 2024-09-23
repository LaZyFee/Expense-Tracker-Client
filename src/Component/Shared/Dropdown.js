// src/components/Dropdown.js
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react'; // Import from Lucide React

const Dropdown = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center space-x-1 p-2 bg-gray-200 rounded">
                <span>Options</span>
                <ChevronDown size={16} />
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="bg-white shadow-lg rounded p-2">
                <DropdownMenu.Item className="p-2 hover:bg-gray-100">Profile</DropdownMenu.Item>
                <DropdownMenu.Item className="p-2 hover:bg-gray-100">Settings</DropdownMenu.Item>
                <DropdownMenu.Item className="p-2 hover:bg-gray-100">Logout</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};

export default Dropdown;
