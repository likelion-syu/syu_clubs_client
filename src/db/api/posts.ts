import axios from 'axios';
import { IPost } from '../../store/posts/interfaces';
const host = process.env.REACT_APP_DB_HOST;

const getPostsList = async ():Promise<IPost[]>=>{
    console.log('[API/Posts] get list requested');
    const response = await axios.get(host + '/api/posts/')
    return response.data
}

export default {
    getPostsList,
}