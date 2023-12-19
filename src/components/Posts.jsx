import { useState }  from 'react';
import PostItem from './PostItem';
import Lens from '../images/lens.png';
import Couple from '../images/couple.jpg';
import Child from '../images/baby.jpg';

const TestPosts = [
    {
        id: 1,
        thumbnail: Lens,
        category: 'Agriculture',
        title: "This is the title of 1st sample Blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur pariatur reiciendis modi fuga consequuntur eum, nemo blanditiis alias repellat porro quas necessitatibus inventore nulla tempora. Pariatur vel inventore under!",
        authorID: 1
    },
    {
        id: 2,
        thumbnail: Child,
        category: 'Agriculture',
        title: "This is the 2nd Blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur pariatur reiciendis modi fuga consequuntur eum, nemo blanditiis alias repellat porro quas necessitatibus inventore nulla tempora. Pariatur vel inventore under!",
        authorID: 4
    },
    {
        id: 3,
        thumbnail: Couple,
        category: 'Engineering',
        title: "This is the title of 3rd sample Blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur pariatur reiciendis modi fuga consequuntur eum, nemo blanditiis alias repellat porro quas necessitatibus inventore nulla tempora. Pariatur vel inventore under!",
        authorID: 2
    },
    {
        id: 4,
        thumbnail: Lens,
        category: 'Wheather',
        title: "This is the title 4th Blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur pariatur reiciendis modi fuga consequuntur eum, nemo blanditiis alias repellat porro quas necessitatibus inventore nulla tempora. Pariatur vel inventore under!",
        authorID: 5
    },
    {
        id: 5,
        thumbnail: Child,
        category: 'Arts',
        title: "This is the title of 5th Blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur pariatur reiciendis modi fuga consequuntur eum, nemo blanditiis alias repellat porro quas necessitatibus inventore nulla tempora. Pariatur vel inventore under!",
        authorID: 2
    },
]


const Posts = () => {

    const [posts, setPosts] = useState(TestPosts)

  return (
    <section className="posts">
        <div className="container post_conatiner">
            {
                posts.map(({id, thumbnail, category, title, desc, authorID}) => 
                <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}  /> )
            }
        </div>
    </section>
  )
}

export default Posts