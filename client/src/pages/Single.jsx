import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu.jsx';

const Single = () => {
  return (
    <div className='single'>
    <div className="content">
      <img src="https://th.bing.com/th/id/OIP.kAWtaZ095hi1H8VSUAOO9QHaF7?rs=1&pid=ImgDetMain" alt="" />
      <div className="user">
        <img src="https://th.bing.com/th/id/OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
      <div className="info">
        <span>Prakriti</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=2`}>
        <img src={Edit} alt="" />
        </Link>
        <img src={Delete} alt="" />
      </div>
      </div>
      <h1>The Blogging Adventure</h1>
      <p>Embarking on the journey of blogging is akin to setting sail on a grand adventure. As you navigate the vast expanse of the digital world, you encounter exhilarating highs and daunting lows, each contributing to the richness of your experience.
At the outset, the thrill of sharing your thoughts and passions with the world propels you forward. You craft compelling narratives, share insightful perspectives, and engage with a diverse audience that spans continents. With each post, you discover new facets of your creativity and voice, fueling your passion for storytelling.
Yet, the path of a blogger is not without its challenges. You face writer's block, doubting whether your words will resonate with others. The pressure to consistently produce quality content can be overwhelming, leading to moments of self-doubt and frustration.
However, it is through these trials that you grow as a writer and as an individual. You learn to embrace imperfection, finding beauty in vulnerability and authenticity. You connect with fellow bloggers who share your struggles and triumphs, forming a supportive community that uplifts and inspires.
In the end, the great blogging adventure is not just about the destination, but the journey itself. It's about embracing the uncertainty, finding joy in the process, and sharing your unique perspective with the world.
    </p>
    </div>
    <Menu />
    </div>
  );
};

export default Single
