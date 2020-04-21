import React from 'react';
import { Link } from 'react-router-dom';

interface ContentHeaderProps {
    title: string,
    link: string,
}

const index = (props: ContentHeaderProps) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{props.title}</h2>
            <Link style={styles.moreLink} to={props.link}>더보기</Link>
            {/* <Link href={props.link} style={styles.moreLink}>더보기</a> */}
        </div>
    );
};

const styles: { [name: string]: React.CSSProperties } = {
    container: {
        padding: "15px 20px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginBottom: '10px',
    },
    title: {
        color: "rgb(48, 155, 91)",
        padding: '0',
        margin: '0',
    },
    moreLink: {
        color: '#3d3d3d',
        fontSize: '.8em',
        textDecoration: 'none',
        position: 'absolute',
        right: '0',
        marginRight: '20px'
    }
}

export default index;