/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import './index.css';

const index = (props: any) => {
    const ui = {
        getVisibility: ()=>{
            if(props.visibility){
                return "container open"
            } 
            else{
                return "container"
            }
        },
        close: ()=>{
            console.log('menu will close');
            props.close();
        }
    }
    return (
        <div style={styles.container} className={ui.getVisibility()} >
            <button onClick={ ui.close }>close</button>
            
        </div>
    );
};

const styles: { [name: string]: React.CSSProperties } = {
    container: {
        position: 'fixed',
        top: 0,
        width: '94%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#eee',
        padding : '0 3%',
    }
}

export default index;