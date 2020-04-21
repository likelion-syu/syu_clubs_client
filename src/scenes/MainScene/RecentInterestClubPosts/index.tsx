import React from 'react';
import PostCarousel from './PostCarousel';
import ContentHeader from '../ContentHeader';
const index = () => {
    return (
        <div style={styles.container}>
            <ContentHeader title="최근 관심 동아리 포스트" link="#"/>
            <div className="ContentContainer" style={ styles.contentContainer }>
                <PostCarousel/>
            </div>
        </div>
    );
};

const styles: { [name: string]: React.CSSProperties } = {
    container: {
        marginTop : '30px',
    },
    wrapper: {},
    item: {},
    link: {},
   
}


export default index;