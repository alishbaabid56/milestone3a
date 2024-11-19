"use client"


import { useState } from 'react';

export default function CommentsSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li key={index} className="border p-2 rounded-lg">
            {comment}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Add a Comment</h3>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border border-gray-300 rounded p-3 w-full"
            placeholder="Write your comment"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-600 text-white  py-2 px-4  hover:bg-blue-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}