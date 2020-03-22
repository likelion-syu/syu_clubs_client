import React from 'react';

type ClubInfoProps = {
  name: string;
  introduce: string;
  created_at: number;
};

function ClubInfo({ name, introduce, created_at }: ClubInfoProps) {
  return (
    <div>
      <div>
        <div className="name">{name}</div>
      </div>
      <p>{introduce}</p>
      <p>{created_at}</p>
    </div>
  );
}

export default ClubInfo;