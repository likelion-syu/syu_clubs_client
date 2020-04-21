import React, { useState, useEffect } from 'react';
import { IoIosMenu, IoIosNotifications } from "react-icons/io";
import './header.css';
import spacing from '../../components/Base/spacing';

import SideMenuScene from '../../scenes/SideMenuScene';
import logoFlat from './logo-flat.svg';
// https://gist.github.com/andjosh/6764939
// 스크롤 애니메이션

const Header = () => {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const [navTransparent , setNavTransparent] = useState(true);
    const [logoVisibility , setLogoVisibility] = useState(false);
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
                setLogoVisibility(true);
            }
            else{
                setNavTransparent(true);
                setLogoVisibility(false);
            }
        });
    }, []);

    return (
        <>
            <nav style={styles.container} className={ui.nav.class()}>
                <button style={styles.collapseBtn} onClick={ui.menu.open}>
                    <IoIosMenu style={styles.icon} />
                </button>
                { logoVisibility? <img style={styles.logo} src={logoFlat}></img> : <></> }
                <button style={styles.collapseBtn}>
                    <IoIosNotifications style={styles.icon} />
                </button>
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
        zIndex:spacing.zIndex.nav,
    },
    logo: {
        padding: 0,
        margin: 0,
        width:"30px",
    },
    logoWrapper: {
        alignSelf: 'flex-start'
    },
    collapseBtn: {
        background: 'none',
        border: 'none',
        boxShadow: 'none',
    },
    collapse: {
        // background: 'none',
        // border: 'none',
        // boxShadow: 'none',
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
