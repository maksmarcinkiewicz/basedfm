import React from "react";
import "./Header.css"

class Header extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <div className="display flex justify-between p-4">
                <h1 className="text-2xl font-bold display flex">BASED-FM</h1>

                <button className="items-center display flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>

            </div>
        );
    }
}

export default Header