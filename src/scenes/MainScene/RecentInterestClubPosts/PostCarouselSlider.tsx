import React from 'react';

const PostCarouselSlider = function () {
    const tempImgSrc = 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?cs=srgb&dl=pexels-3937174.jpg&fm=jpg';

    return (<div style={styles.container}>
        <div style={styles.wrapper}>
            <div style={{ ...styles.imgWrapper, backgroundImage: 'url("' + tempImgSrc + '")' }}>
            </div>
            <div style={styles.contentContainer}>
                <p style={ {...styles.text, ...styles.titleText} }>동아리 회원 모집!!</p>
                <p style={ {...styles.text, ...styles.infoText} }>멋쟁이사자처럼</p>
                <p style={ {...styles.text, ...styles.infoText} }>2020.01.30</p>
            </div>
        </div>
    </div>);
}

const styles: { [name: string]: React.CSSProperties } = {
    container: {
        padding: '0 15px',
    },
    wrapper: {
        backgroundColor: '#fff',
        // height: '180px',
        boxShadow: 'rgba(0, 0, 0, 0.14) 2px 2px 6px 1px',
        borderRadius: '20px',
    },
    titleContainer: {

    },
    imgWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '150px',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        overflow: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    contentContainer: {
        padding: '10px 10px 15px 10px',
    },
    text : {
        padding : 0,
        margin : 0,
        fontSize : '.7em',
    },
    titleText : {
        fontWeight:'bold',
        fontSize: '.8em',
        marginBottom:'5px',
    },
    infoText :{
        color : '#7a7a7a'
    }
}

export default PostCarouselSlider;