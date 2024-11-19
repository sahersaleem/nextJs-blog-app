"use client";

import { Button } from "@/components/ui/button";
import React, {  ChangeEvent, useEffect, useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState<string[]>([]);

  const [newComment, setNewComment] = useState<string>("");

  const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments((prevComment) => [...prevComment, newComment]);
  };

  useEffect(() => {
    const savedComment = JSON.parse(localStorage.getItem('comments')!)||[];
    setNewComment(savedComment);
  },[]);

  useEffect(() => {
    const setComments = JSON.stringify(
      localStorage.setItem("comments", JSON.stringify(newComment))
    );
  }, [comments]);

  return (
    <div className=" justify-center items-center flex flex-col space-y-10">
      <div>
        <h1 className="text-3xl font-relway font-bold">Comments</h1>
        {comments.map((com, index) => (
          <p key={index} className="border-b  border-[3px] ">{com}</p>
        ))}
      </div>
      <h1 className="text-2xl font-relway font-bold text-center">
        Give your feedback here!
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
        <textarea
          cols={20}
          rows={3}
          name="commentSection"
          placeholder="Enter Your comment ....."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="px-4 py-5 outline-none border-black border-[2px]"
        ></textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Comment;
