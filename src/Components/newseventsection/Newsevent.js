import React from 'react'
import useSWR from 'swr';
import moment from 'moment'

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Newsevent() {
    const url = "https://cms.maitretech.com/navniketan/items/events?fields=*.*.*";


    const { data, error } = useSWR(url, fetcher);

    if (error) {
        return <div>Error...</div>
    }
    if (!data) {
        return <div>No data...</div>
    }
    return (
        <div>
            <div className='eventinfo'>
                <h3 style={{ textAlign: 'center' }}>News & Events</h3>
                <hr />
                <div>
                    <div className='newsinfo'>
                        {/* <ul>
                        <li>
                        <div className="in-image"><div className="tt-b-day rem-border">05<div className="tt-b-day-r"><div className="tt-b-month">Sep</div><div className="tt-b-date">2020</div></div></div><span className="in-turquoise"><h6>+ Read more</h6></span></div> <div className="in-content" id="nid" >Online Dance Competition (Solo) </div></li>
                        </ul> */}


                        <marquee direction="up" id="scroll">
                            <div className="ideaboxNews in-easing in-relative" id="idx1">
                                <ul id="newscontent1" className="mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" >
                                    <div id="mCSB_1" className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" >
                                        <div id="mCSB_1_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" >
                                            {data.data.map((item, i) => {
                                                return <li key={i}>
                                                    <div className="in-image">
                                                        <div className="tt-b-day rem-border">{item.eventdate.split('-')[2]}
                                                            <div className="tt-b-day-r">
                                                                <div className="tt-b-month">{moment(item.eventdate.split('-')[1], 'M').format('MMM')}
                                                                </div>
                                                                <div className="tt-b-date">{moment(item.eventdate.split('-')[0],).format('YYYY')}</div>
                                                            </div>
                                                        </div>
                                                        <span className="in-turquoise"><h6>+ Read more</h6></span>
                                                    </div>
                                                    <div className="in-content" id="nid" >{item.title}</div>
                                                </li>
                                            })}
                                        </div>
                                    </div>
                                    <div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical" >
                                        <div className="mCSB_draggerContainer">
                                            <div id="mCSB_1_dragger_vertical" className="mCSB_dragger">
                                                <div className="mCSB_dragger_bar" ></div>
                                            </div>
                                            <div className="mCSB_draggerRail"></div>
                                        </div>
                                    </div></ul>

                                <div className="in-viewer" >
                                    <div className="in-viewer-header" id="newstitle1">

                                    </div>
                                    <div className="in-viewer-content" id="newscontent2" >

                                    </div>

                                    <span className="in-viewer-close"></span>
                                </div>

                            </div>
                        </marquee>

                    </div>
                </div>
                {/* <div>
                    <button style={{ margin: '10px 0px 0px 0px', backgroundColor: '#4c6578', padding: '5px', borderRadius: '5px', color: '#fff' }}>Read More</button>
                </div> */}
            </div>
        </div>
    )
}

export default Newsevent
