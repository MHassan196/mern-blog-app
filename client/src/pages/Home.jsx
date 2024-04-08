import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
      console.log(data.posts)
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-3 sm:p-10 md:p-16 xl:p-28 m-5 justify-center items-center">
        <h1 className="text-xl font-bold sm:text-2xl md:text-4xl xl:text-6xl text-center">Welcome to Insights Blog</h1>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center">Where Ideas Come to Life</div>
        <p className="text-gray-500 text-xs sm:text-sm text-center">
        Discover a treasure trove of insightful articles and tutorials encompassing the realms of web development, software engineering, and programming languages. Let us be your guide as you embark on a journey to expand your knowledge and skills.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm px-3 py-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 rounded-lg font-bold"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
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
      </div>
    </div>
  );
}

export default Home;
