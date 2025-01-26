"use client";

import { useState } from "react";
import Image from "next/image";

const ProfileDropdown = ({ userName, profileImage, onSignOut }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const IconDropDown = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-2 h-2 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width={'30px'}
            height={'15px'}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );

    return (
        <div className="relative">
            {/* Profile Image and Name */}
            <button
                className="flex items-center space-x-2 px-4 py-2 bg-white shadow-sm rounded-lg hover:bg-gray-100 focus:outline-none"
            // onClick={toggleDropdown}
            >
                <Image
                    src={profileImage}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                />

                    <span className="font-medium text-gray-800" style={{
                        paddingLeft: '0.5em'
                    }}>{userName}</span>

                    <span onClick={toggleDropdown} style={{
                        // width: '34px',
                        // paddingLeft: '1em'
                    }}>
                        <IconDropDown className={`w-2 h-2 transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                    </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <button
                        className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                        onClick={onSignOut}
                    style={{ paddingRight: '8.5em' }}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
