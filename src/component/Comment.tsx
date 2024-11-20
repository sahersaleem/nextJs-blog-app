"use client";

import { Button } from "@/components/ui/button";
import React, { ChangeEvent, useEffect, useState } from "react";

type CommentType = {
  username: string;
  comment: string;
};
const Comment = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [username, setUsername] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setComments((prevComment) => 
       [
        
           ...prevComment,{

          username: username,
          comment: newComment,
           
        },
      ]
    );


    setUsername("")
    setNewComment("")
  };

  useEffect(() => {
    const savedComment = JSON.parse(localStorage.getItem("comments")!||"[]")||[];

    setComments(savedComment)
  }, []);

  useEffect(() => {
    
      localStorage.setItem("comments",JSON.stringify (comments))
  
  }, [comments]);

  return (
    <div className=" justify-center items-center flex flex-col space-y-10">
      <div>
        <h1 className="text-3xl font-relway font-bold">Comments</h1>
        {comments.map((com, index) => (
          <div key={index} className="border-b border-black mb-5">
            <p className="font-bold">{com.username}</p>
            <p>{com.comment}</p>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-relway font-bold text-center">
        Give your feedback here!
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
        <input
          type="string"
          name="name"
          value={username||""}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter your name"
        />
        <textarea
          cols={20}
          rows={3}
          name="commentSection"
          placeholder="Enter Your comment ....."
          value={newComment||""}
          onChange={(e) => setNewComment(e.target.value)}
          className="px-4 py-5 outline-none border-black border-[2px]"
        ></textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Comment;
