import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import ClubIdForm from '../components/ClubIdForm';
import ClubInfo from '../components/ClubInfo';
import { getClubsThunk } from '../store/clubs';

function ClubLoader() {
  const { data, loading, error } = useSelector((state: RootState) => state.clubs.clubData);
  const dispatch = useDispatch();

  const onSubmitUsername = (id: string) => {
    dispatch(getClubsThunk(id));
  };

  return (
    <>
      <ClubIdForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && <ClubInfo introduce={data.club_introduce} name={data.club_name} created_at={data.created_at} />}
    </>
  );
}

export default ClubLoader;