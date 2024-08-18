function Article({posts}) {

    return (
        <article key={posts.keyId}>
            <h3>{posts.title}</h3>
            <small>{posts.date}</small>
            <p>{posts.preview}</p>
        </article>
    )
}
export default Article ;