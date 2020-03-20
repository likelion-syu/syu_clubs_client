import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import ClubIdForm from '../components/ClubIdForm';
import ClubInfo from '../components/ClubInfo';
import { getClubsThunk } from '../store/clubs';

function ClubLoader() {
  const { data, loading, error } = useSelector((state: RootState) => state.clubs.clubData);
  const dispatch = useDispatch();

  const onSubmitUsername = () => {
    dispatch(getClubsThunk());
  };

  return (
    <>
      <ClubIdForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && <ClubInfo introduce={data[0].club_introduce} name={data[0].club_name} created_at={data[0].created_at} />}
    </>
  );
}

export default ClubLoader;