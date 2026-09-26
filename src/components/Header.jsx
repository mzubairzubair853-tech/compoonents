import {useState} from "react";
const Header = ({ username }) => {

    function showDummyAlert() {
        alert("This is a dummy alert!");
    }

    return (
        <div>
            <h1>Hello {username}</h1>

            <button onClick={showDummyAlert}>
                Show Dummy Alert
            </button>

            <p>Header I am from header component working fine</p>
        </div>
    );
};

export default Header;