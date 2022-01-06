// 1. Задача 1(basic): Задачата е да се вдигне един react.js сайт(мога да дам домейн ако е нужен),
//  в който да има на начална страница списък с всички постове с тяхната снимка, дата и заглавие

// 2. Задача 2(advanced): Всеки пост да бъде линк, който да матчва "slug" key - 
// а.Когато се кликне, да отваря индивидулна страница със снимка, текст, дата и контент на публикацията.

import useFetch from './useFetch';
import PostsList from './PostsList';

function Home({setId,setImg}) {

    const url = 'https://vipestudio.com/wp-json/wp/v2/posts?_embed'

    const { data, isPending, error } = useFetch(url)

    return (
        <ul className="posts-list">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {data && <PostsList setId={setId} setImg={setImg} posts={data} />}
        </ul>
    )
}

export default Home;