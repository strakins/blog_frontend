import React from 'react';
import Couple from '../images/couple.jpg';
import PostAuthor from './PostAuthor';
import { Link } from 'react-router-dom';

const PostDetails = () => {
  return (
    <section className="postDetail">
      <div className="container post-detail">
        <div className="post-detail-header">
          <PostAuthor />
          <div className="post-detail-buttons">
            <Link to={`/posts/authorname/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/authorname/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
          <h1>This is the Post title</h1>
          <div className="post-details-thumbnail">
            <img src={Couple} alt='post-desc'/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illo ipsam laborum impedit distinctio voluptas. Officiis 
            consectetur optio ab maiores eius quam porro at veritatis!
            Eum quidem a adipisci deleniti omnis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Rem reiciendis commodi alias et illum perferendis, doloremque
            molestiae officia cumque, inventore, ea eveniet sequi maiores 
            iure quod. Sunt quos consectetur velit eius. Expedita voluptates 
            tempora quam error? Consequatur deserunt vero voluptate id 
            ducimus deleniti quas atque nulla nesciunt perspiciatis, odit 
            harum! Vel soluta architecto magnam in iure ratione id at atque 
            omnis, culpa non odit nobis, modi temporibus quam similique ut 
            fugit nisi? Consequuntur ea voluptates dignissimos velit quae 
            veritatis voluptatem perspiciatis, voluptatibus unde quaerat 
            aperiam, natus quibusdam reiciendis harum autem vel. Placeat 
            expedita aperiam molestias vel tenetur voluptate nostrum quisquam 
            incidunt nulla? Beatae architecto voluptatum deserunt aut commodi 
            aliquid reprehenderit, recusandae, in ad repellat facere libero 
            nulla optio ipsum tenetur illo odit provident nam, eum ut rem. 
            Odio porro excepturi a maxime dignissimos voluptate voluptatem 
            nesciunt et odit cum iusto quisquam ex fugiat, dolorem molestiae 
            natus laboriosam veniam aperiam impedit ipsa ducimus! Assumenda 
            iste animi suscipit et fuga molestias dolore, excepturi distinctio 
            odit aperiam quia, dicta accusantium esse accusamus dignissimos 
            debitis non, quam nihil sed. Illum similique unde possimus consequuntur. 
            Modi in a dolorum id dignissimos sed sit nostrum dicta aliquam suscipit 
            quibusdam, officiis soluta rerum eius incidunt fugit obcaecati?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laudantium esse nemo provident explicabo odio aliquam error
            fuga, nihil dolore nulla perferendis iste itaque voluptates 
            consectetur maiores distinctio nobis cupiditate obcaecati.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Labore adipisci voluptatem omnis, eos molestiae aut atque, 
            illo dolorem temporibus perferendis qui magni! Sint ullam 
            quasi nam dolorem inventore obcaecati quidem.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consectetur, consequuntur?
          </p>
        
      </div>
    </section>
  )
}

export default PostDetails