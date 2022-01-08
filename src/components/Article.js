import useFetch from './useFetch';

function Article({ id }) {

    const url = `https://vipestudio.com/wp-json/wp/v2/posts/${id}?_embed`

    const { data, isPending, error } = useFetch(url)
    
    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {data &&
                <div className="article">
                    <img src={data["_embedded"]["wp:featuredmedia"][0]["source_url"]} alt="cat" className='article-img' />
                    <h1 className='title'>{data.title.rendered}</h1>
                    <p>Дата:  {data.date.split("T")[0]}</p>
                    <p className='content' dangerouslySetInnerHTML={{ __html: data.content.rendered}}/>
                </div>}
        </>
    )
};

export default Article;