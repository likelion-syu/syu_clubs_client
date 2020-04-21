import React, { CSSProperties } from 'react';

import ContentHeader from '../ContentHeader';
import Timeline from './Timeline';

const index = () => {
    return (
        <div style={ styles.container }>
            <ContentHeader title="최근 관심 동아리 일정" link="#"/>
            <Timeline/>
        </div>
    );
};

const styles:{ [name:string] : CSSProperties } = {
    container : {
        marginTop: '25px',
    }
}

export default index;