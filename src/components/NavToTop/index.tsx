/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import './index.css';

const index = () => {
    const [visibility, setVisibility] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll' , (ev:Event)=>{
            if(window.pageYOffset > 30){
                setVisibility(true)
            }
            else{
                setVisibility(false);
            }
        });
    }, []);

    const fn = {
        goToTop : ()=>{
            // window.scrollTo(0,0);
            const body = window.document.querySelector('body');
            if(body !== null){
                body.scrollIntoView({behavior: 'smooth'});
            }
        }
    }

    const ui = {
        style : ()=>{
            // return visibility ? {display:"flex"} : { display:'none' };
            return {};
        },
        class: () => {
            if (visibility) {
                return "nav-to-top";
            }
            else {
                return "nav-to-top transparent";
            }
        }
    }

    return (
        <div style={{...styles.container, ...ui.style()}} className={ui.class()}>
            <button style={styles.btn} onClick={fn.goToTop}>
                <IoIosArrowUp></IoIosArrowUp>
                Top
            </button>
        </div>
    );
};

const styles: { [name: string]: React.CSSProperties } = {
    container: {
        position: 'fixed',
        backgroundColor: '#fff',
        width: '50px',
        height: '50px',
        bottom: 20,
        right: 15,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    btn : {
        fontSize: '.9em',
        lineHeight:'.9em',
    }
}

export default index;