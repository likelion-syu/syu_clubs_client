import React, { CSSProperties } from 'react';
import './TimelineItem.css';

const TimelineItem = () => {
    const ui = {
        class : ()=>{
            return "timeline-date-container";
        }
    }
    return (
        <div className="timeline-container" style={styles.container}>
            <div className={ ui.class() } style={ styles.timestampContainer }>
                <p className="timeline-date" >02.03<br/>TUE</p>
            </div>
            <div className="timeline-content" style={ styles.cardContainer }>
                <p style={ styles.cardTitle }>
                    동아리 신입부원 모집 마감일
                </p>
                {/* <p style={ styles.cardContent }>2020.03.13</p> */}
                <p style={ styles.cardContent }>멋쟁이사자처럼</p>
            </div>
        </div>
    );
};

const styles: { [name: string]: CSSProperties } = {
    container : {
        display:'flex',
        justifyContent : 'center',
        alignItems : 'start',
        padding : '0px 15px',
        // height : '80px',
        position:"relative",
    },
    timestampContainer : {
        width : '30%',
    },
    timestampTitle : {
        fontWeight : 'bold',
        padding : 0,
        margin : 0,
    },
    cardContainer :{
        backgroundColor:'#fff',
        boxShadow: 'rgba(0, 0, 0, 0.14) 2px 2px 6px 1px',
        borderRadius : '10px',
        padding : '15px 10px',
        margin : '10px 0',
        width : '70%',
    },
    cardTitle : {
        fontWeight : 'bold',
        fontSize : '.9em',
        margin : 0,
        padding : 0,
    },
    cardContent : {
        fontSize : '.7em',
        color: 'rgb(122, 122, 122)',
        margin : 0,
        padding : 0,
    }
}

export default TimelineItem;        