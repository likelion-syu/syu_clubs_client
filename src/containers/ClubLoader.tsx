import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import ClubIdForm from '../components/ClubIdForm';
import ClubInfo from '../components/ClubInfo';
import { postPostThunk } from '../store/posts';
import { PostData } from '../api';

function ClubLoader() {

  // const { data, loading, error } = useSelector((state: RootState) => state.post.postData);
  // const dispatch = useDispatch();



  // const onSubmitPostData = (postData :PostData) => {
  //   dispatch(postPostThunk(postData));
  // }

  return (
    <>
      {/* <ClubIdForm onSubmitUsername={onSubmitPostData} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && <ClubInfo introduce={data.post_title} name={data.post_content} created_at={data.post_id} />} */}
    </>
  );
}

export default ClubLoader;