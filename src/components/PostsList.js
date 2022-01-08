
import { Link } from 'react-router-dom';

function PostsList({ posts, setId}) {

    return (
        <ul className="posts-list">
            {posts.map(x => {
                return (<li className="post" key={x.id}>
                    <img className='main-img' src={x["_embedded"]["wp:featuredmedia"][0]["source_url"]} />
                    <h1 className='main-header'>{x.title.rendered}</h1>
                    <div className='excerpt' dangerouslySetInnerHTML={{ __html: x.excerpt.rendered }} />
                    <Link to={x.slug}><button className="read-more-btn" onClick={() => setId(x.id)}>Read More ...</button></Link>
                </li>)
            })}
        </ul>
    );
}

export default PostsList;