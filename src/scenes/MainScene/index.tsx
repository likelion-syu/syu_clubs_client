import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BaseComponent from '../../components/Base';

import axios from 'axios';

// TODO 
// 1. 가장 최근 동아리 활동 포스트
// 2. 다가오는 내 관심 동아리 일정 
// 4. 최근 동아리 공지사항 5건 
// 3. 조회수 높은순 동아리 목록 
// 5. 다가오는 동아리 일정 5건 
// 6. footer
interface IClubs{
    club_id: number;
    club_name: string;
    club_desc: string;
    user: object;
    club_img_url: string;
    created_at: Date;
    updated_at: Date;
    is_central: string;
    is_united: string;
    club_type: object;
}

const MainScene = () => {
    const [items, setItems] = useState<IClubs[]>([]);
    
    const fn = {
        get: async () => {
            const result = await axios({
                url: "http://localhost:8000/api/clubs",
                method: "get",
            });
            setItems(result.data);
        }
    }

    useEffect(() => {
        fn.get();
    }, []);

    return (
        <>
            <BaseComponent />
            <Header />
            <p>Hello</p>
            <div>
                {
                    items.map((item,idx)=>{
                        return (
                            <div key={idx.toString()}>
                                <img style={styles.img} src={item.club_img_url}></img>
                                <p>{item.club_name}</p>
                            </div>
                        );
                    })
                }
            </div>
            <Footer />
        </>
    );
}

const styles: { [name: string]: React.CSSProperties } = {
    img : {
        width : '50px',
        // height: '50px',
    }
}

export default MainScene;