import React, { useState } from 'react';

const Header = () => {
    return (<nav style={styles.container}>
        <a style={styles.logo} href="#">
            SYU Clubs
        </a>
        <div style={ styles.collapse }>
            <ul style={ linkStyles.wrapper }>
                <li style={linkStyles.item}>
                    <a style={ linkStyles.link } href="#"></a>
                </li>
            </ul>
        </div>
        <button style={ styles.collapseBtn }/>
    </nav>);
}

// CSS 스타일링 
const styles: { [name: string]: React.CSSProperties } = {
    container: {
        top:'0',
        left:'0',
        position:'fixed',
        width: "100%",
        height: "56px",
        backgroundColor: "#0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
    },
    logo: {
        padding: 0,
        margin: 0,
    },
    logoWrapper: {
        alignSelf: 'flex-start'
    },
    collapseBtn:{

    },
    collapse : {

    }
}

const linkStyles:{ [name:string]:React.CSSProperties } = {
    container:{},
    wrapper:{},
    item:{},
    link:{},
}

export default Header;
