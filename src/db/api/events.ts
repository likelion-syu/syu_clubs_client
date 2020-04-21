import { IEvent } from '../../store/events/interfaces';
import axios from 'axios';
const host = process.env.REACT_APP_DB_HOST;

// 동아리 일정 목록을 가져옴.
const getEvent = async (): Promise<IEvent[]> => {
    console.log('[API/EVENTS] get list requested');
    const response = await axios.get(host + '/api/events/list/');
    return response.data;
}


export default {
    getEvent,
};
