import React from 'react';
import PostCarousel from '../RecentInterestClubPosts/PostCarousel';
import ContentHeader from '../ContentHeader';
const index = () => {
    return (
        <div style={styles.container}>
            <ContentHeader title="최근 관심 동아리 공지사항" link="#"/>
            <div className="ContentContainer" style={ styles.contentContainer }>
                <PostCarousel/>
            </div>
        </div>
    );
};

const styles: { [name: string]: React.CSSProperties } = {
    container: {
        // margin : '20px 0',
    },
    wrapper: {},
    item: {},
    link: {},
   
}


export default index;