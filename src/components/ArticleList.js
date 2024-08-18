import Article from "./Article";


function ArticleList({articles}) {
    
    return (
        <main>
           {articles.map((article) => (
              <Article key={article.id} date={article.date} title={article.title} preview={article.preview}  />
            ))} 
        </main>
    )
}
export default ArticleList;