import axios from 'axios';
import { IClub, IClubListOption } from '../../store/clubs/interfaces';
const host = process.env.REACT_APP_DB_HOST;

// NOTICE : 비동기로 실행되나 돌려주는 항목이 Response가 아니라 IClub가 들어있는 배열을 돌려보냄
// 목록을 조회 함, 검색을 해야되는 경우 options를 받아서 처리하도록 함
const getList = async (options?: IClubListOption): Promise<IClub[]> => {
    console.log('[API/CLUBS] get list requested');
    const response = await axios.get(host + '/api/clubs/list/');
    return response.data;
};

// TODO : 조회 수 높은순 동아리 목록
const getFavList = async (): Promise<IClub[]> => {
    console.log('[API/CLUBS] get Fav list requested');

    const options:IClubListOption = {
        page: 1,
        items_per_page: 5,
        keyword: '',
        category: '조회 수 높은 순 동아리 카테고리',
    };
    
    console.log(options);
    
    const response = await axios.get(host + '/api/clubs');
    return response.data;
};



export default {
    getList,
    getFavList,
};
