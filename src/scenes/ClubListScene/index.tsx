import React from 'react';
import Header from '../../components/Header';
import BaseComponent from '../../components/Base';
import Footer from '../../components/Footer';
import useClubs from '../../hooks/useClubs';

import './index.css';

const ClubList = () => {
    const states = useClubs();
    return (
        <div className="content-container">
            <BaseComponent />
            <Header>동아리 목록</Header>
            <input className="input-wrapper"></input>
            <div className="grid-wrapper">
                {states.clubs.data &&
                    states.clubs.data.map((item, idx) => {
                        return (
                            <div key={idx.toString()} className="card">
                                <div className="card-header">
                                    <div className="card-img">
                                        <img
                                            alt={item.club_name}
                                            className="card-img"
                                            src={item.club_img_url}></img>
                                    </div>
                                </div>
                                <p>{item.club_name}</p>
                                <p>{item.club_type} </p>
                            </div>
                        );
                    })}
            </div>
            <div className="grid-wrapper">
                {states.events.data &&
                    states.events.data.map((item, idx) => {
                        return (
                            <div key={idx.toString()}>
                                <p>{item.club_event_name}</p>
                                <p>{item.club_event_dt}</p>
                            </div>
                        );
                    })}
            </div>
            <Footer />
        </div>
    );
};

// const styles: { [name: string]: React.CSSProperties } = {
//     img: {
//         width: '50px',
//         margin: "0px auto",
//         // height: '50px',
//     },
// };

export default ClubList;
