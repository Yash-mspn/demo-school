import React from 'react';
import Newsevent from './Newsevent';
import Calendar from './Calendar';
import Topper from './Topper';
import '../css/Eventmain.css';

function Eventmain() {
    return (
        <div className="eventmain-container">
            <div className="eventgrid">
                <div className="newsevent">
                    <Newsevent />
                </div>
                <div className="calendar">
                    <Calendar />
                </div>
                <div className="topper">
                    <Topper />
                </div>
            </div>
        </div>
    );
}

export default Eventmain;
