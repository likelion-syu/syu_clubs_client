import React, { useState, useEffect, Children } from 'react';
import { IoIosMenu, IoIosNotifications } from "react-icons/io";
import './header.css';

import SideMenuScene from '../../scenes/SideMenuScene';
// https://gist.github.com/andjosh/6764939
// 스크롤 애니메이션

const Header = (props:any) => {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const [navTransparent , setNavTransparent] = useState(true);
    const ui = {
        menu: {
            open: () => {
                setMenuVisibility(true);
                console.log('open');
            },
            close: () => {
                setMenuVisibility(false);
            }
        },
        nav : {
            class : ()=>{
                if(navTransparent){
                    return "nav transparent"
                }
                else{
                    return "nav";
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',  (ev:Event)=>{
            if(window.pageYOffset > 30){
                setNavTransparent(false);
            }
            else{
                setNavTransparent(true);
            }
        });
    }, []);

    return (
        <>
            <nav style={styles.container} className={ui.nav.class()}>
                {/* <button style={styles.collapse} onClick={ui.menu.open}>
                    <IoIosMenu style={styles.icon} />
                </button> */}
                <div className="newButton" onClick={ui.menu.open}></div>
                <div className="text">{props.children}</div>
                {/* <button style={styles.collapseBtn}>
                    <IoIosNotifications style={styles.icon} />
                </button> */}
                <div style={styles.space}></div>
            </nav>
            <SideMenuScene visibility={menuVisibility} close={ui.menu.close} />
        </>);
}

// CSS 스타일링 
const styles: { [name: string]: React.CSSProperties } = {
    container: {
        top: '0',
        left: '0',
        position: 'fixed',
        width: "100%",
        height: "56px",
        // backgroundColor: "rgba(0,0,0,0)",
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    space: {
        padding: 30,
    },
    logo: {
        padding: 0,
        margin: 0,
    },
    logoWrapper: {
        alignSelf: 'flex-start'
    },
    collapseBtn: {

    },
    collapse: {
        display: 'inline',
    },
    icon: {
        fontSize: '1.8em',
        padding: "0 .5em",
    },
}

const linkStyles: { [name: string]: React.CSSProperties } = {
    container: {},
    wrapper: {},
    item: {},
    link: {},
}

export default Header;
