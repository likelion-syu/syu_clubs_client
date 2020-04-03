import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import spacing from '../../../components/Base/spacing';


const index = () => {
    return (
        <div id="search-bar" style={ styles.container }>
            <div className="header-title" style={styles.headerTitle}>
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
        height : "500px",
        marginTop : '-56px',
        // flex: 1,
        flexDirection : 'column',
        padding: '56px 0',
        alignContent:'center',
        display:'flex',
        position:'fixed',
        zIndex:spacing.zIndex.default,
    },
    headerTitle : {
        width: '100%',
        padding: '55px 0',
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
    },
    searchBtn:{
        color:'#309b5b',
        fontSize:'1.5em',
        display:'flex',
        padding : 0,
    },
    searchInputContainer:{
        display:'flex',
        justifyContent:'center',
        width : '70%',
        borderRadius:'10px',
        padding: '7px 10px',
        border:0,
        backgroundColor:'#fff',
        boxShadow:'2px 2px rgba(0,0,0,.3)',
        alignSelf:'center',
    }
};


export default index;