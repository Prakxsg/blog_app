import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  const posts = [
    {
      id: 1,
      title: "The Blogging Adventure",
      desc: "Join me on my journey through the blogosphere as I navigate the highs and lows of online writing!",
      img: "https://th.bing.com/th/id/OIP.f1eE_Qgn9M9zCqnuZBo9-gHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      title: "A Tale of Two Kittens",
      desc: "Discover the heartwarming story of two furry friends and the mischief they get up to in their owner's home.",
      img: "https://th.bing.com/th/id/OIP.R3U06JEJvoROC7iFM1AnzAHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      title: "Cooking Chaos",
      desc: "From kitchen catastrophes to culinary triumphs, follow along as I share my adventures in cooking gone wrong... and sometimes right!",
      img: "https://th.bing.com/th/id/OIP.kAWtaZ095hi1H8VSUAOO9QHaF7?rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      title: "The Art of Procrastination",
      desc: "From kitchen catastrophes to culinary triumphs, follow along as I share my adventures in cooking gone wrong... and sometimes right!",
      img: "https://mblexguide.com/wp-content/uploads/2019/01/Procrastination-concept-e1546805888911.jpg",
    },
  ];
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
