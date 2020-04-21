import React, { CSSProperties } from 'react';
import TimelineItem from './TimelineItem';

const Timeline = () => {
    const testItems = [1, 2, 3, 4, 5];

    return (
        <div style={styles.container}>
            {testItems.map((item, idx) => <TimelineItem key={idx} />)}
        </div>
    );
};

const styles: { [name: string]: CSSProperties } = {
    container: {
        // backgroundColor: "red",
    }
}

export default Timeline;    