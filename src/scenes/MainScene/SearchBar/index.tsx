import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import spacing from '../../../components/Base/spacing';
import logo from './logo.svg';

const index = () => {
    return (
        <div id="search-bar" style={ styles.container }>
            <div className="header-title" style={styles.headerTitle}>
                <div style={styles.logoContainer} >
                    <img src={logo} style={styles.logo}/>   
                </div>
                <h2 style={ styles.headerTitleText }>동아리에 대해 물어보세요!</h2>
                <p style={ styles.headerTitleDesc }>삼육대 동아리들의 일정, 활동에 대해 알아보세요</p>
            </div>
            <div style={ styles.searchInputContainer }>
                <input style={styles.searchInput} type="text" placeholder="#인싸"></input>
                <button type="button" style={ styles.searchBtn }>
                    <IoMdSearch/>
                </button>
            </div>
        </div>
    );
};

const styles: { [name:string]: React.CSSProperties } = {
    container : {
        backgroundColor: "#309b5b",
        width:'100%',
        minHeight : "500px",
        marginTop : '-56px',
        flexDirection : 'column',
        paddingTop:'25px',
        alignContent:'center',
        display:'flex',
        position:'fixed',
        zIndex:spacing.zIndex.default,
    },
    logo : {
        width : '90px',
        height:'90px',
    },
    logoContainer: {
        width : '100%',
        display:'flex',
        justifyContent:'center',
        marginBottom : '25px'
    },
    headerTitle : {
        width: '100%',
        padding: '40px 0',
    },
    headerTitleText : {
        color:'#fff',
        margin:0,
        textAlign:'center',
    },
    headerTitleDesc: {
        color:'#fff',
        margin:0,
        textAlign:'center',
        marginTop: '10px',
        fontSize: '.8em',
    },
    searchInput : {
        fontSize: '1.3em',
        fontWeight: 'bold',
        color: "#309b5b",
        margin:0,
        padding:0,
        border:0,
    },
    searchBtn:{
        color:'#309b5b',
        fontSize:'1.5em',
        display:'flex',
        padding : 0,
        margin:0,
        background:'none',
        border:0,
    },
    searchInputContainer:{
        display:'flex',
        justifyContent:'center',
        // width : '70%',
        borderRadius:'10px',
        padding: '7px 15px',
        border:0,
        backgroundColor:'#fff',
        boxShadow:'2px 2px rgba(0,0,0,.3)',
        alignSelf:'center',
    }
};


export default index;