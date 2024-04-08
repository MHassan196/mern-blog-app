import React, {useState, useEffect} from "react";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
      console.log(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 items-center justify-center">
      {posts && posts.length > 0 && (
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-center">Blog Posts</h2>
          <div className="flex flex-wrap gap-4">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <Link
            to={"/search"}
            className="text-lg text-teal-500 hover:underline text-center"
          >
            View all posts
          </Link>
        </div>
      )}

      <CallToAction />
    </div>
  );
}

export default Projects;
