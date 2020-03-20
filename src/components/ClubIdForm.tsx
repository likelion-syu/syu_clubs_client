import React, { FormEvent, useState, ChangeEvent } from 'react';


type ClubIdFormProps = {
  onSubmitUsername: (username: string) => void;
};

function ClubIdForm({ onSubmitUsername }: ClubIdFormProps) {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={input} placeholder="동아리 id를 입력하시오" />
      <button type="submit">조회</button>
    </form>
  );
}

export default ClubIdForm;