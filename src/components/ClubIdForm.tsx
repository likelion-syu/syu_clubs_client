import React, { FormEvent, useState, ChangeEvent } from 'react';
import {PostData} from '../api'



type ClubIdFormProps = {
  onSubmitUsername: (postData: PostData) => void;
};

function ClubIdForm({ onSubmitUsername }: ClubIdFormProps) {
  const [ postValues, setPostValues ] = useState<PostData>({
    post_title: "",
    post_content: "",
    is_deleted: 0,
    is_notice: 0,
    category: 2,
    club: 24,
    user: 1,
})

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(postValues);
  };

  

  const onChange =  (prop: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setPostValues({...postValues,  [prop]: e.target.value});
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange("post_title")} value={postValues.post_title} placeholder="제목" />
      <input onChange={onChange("post_content")} value={postValues.post_content} placeholder="내용" />
      <input onChange={onChange("is_deleted")} value={postValues.is_deleted} placeholder="?" />
      <input onChange={onChange("is_notice")} value={postValues.is_notice} placeholder="?" />
      <input onChange={onChange("category")} value={postValues.category} placeholder="?" />
      <input onChange={onChange("club")} value={postValues.club} placeholder="?" />
      <input onChange={onChange("user")} value={postValues.user} placeholder="?" />
      <button type="submit">조회</button>
    </form>
  );
}

export default ClubIdForm;