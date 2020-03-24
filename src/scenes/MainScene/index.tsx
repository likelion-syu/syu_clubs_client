import React, { useEffect } from 'react';

// UI 추가 구성 요소
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BaseComponent from '../../components/Base';
import NavToTop from '../../components/NavToTop';

// 데이터를 가져오는데 필요한 요소
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getClubsListThunk } from '../../store/clubs';

// React Router
import { Link } from 'react-router-dom';

// TODO 
// 1. 가장 최근 동아리 활동 포스트
// 2. 다가오는 내 관심 동아리 일정 
// 4. 최근 동아리 공지사항 5건 
// 3. 조회수 높은순 동아리 목록 
// 5. 다가오는 동아리 일정 5건 
// 6. footer

const MainScene: React.FC = () => {
    const list = {
        ...useSelector((state: RootState) => state.clubs.ClubList.list)
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClubsListThunk());
    }, [dispatch]);

    useEffect(()=>{
        // 로딩 인디케이터 
        console.log(list.loading);
    }, [list.loading]);

    useEffect(()=>{
        if(list.data !== null){
            console.log(list.data[0].club_name);
        }
    },[list.data]);
return (
    <div className="content-container">
        <BaseComponent />
        <Header />
        <p>Hello</p>
        <div>
            {
                list.data && list.data.map((item, idx) => {
                    return (
                        <div key={idx.toString()}>
                            <img alt={item.club_name} style={styles.img} src={item.club_img_url}></img>
                            <p>{item.club_name}</p>
                        </div>
                    );
                })
            }
        </div>
        <Link to='/second'>second</Link>
        <NavToTop />
        <Footer />
    </div>
);
}

const styles: { [name: string]: React.CSSProperties } = {
    img: {
        width: '50px',
        // height: '50px',
    }
}

export default MainScene;