import ArticleCard from "../components/ArticleCard";

const Articles = ()=>{
    
    return (
        <>
            <section>
                <h1>Latest Articles</h1>
                <div className="flex flex-col">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </section>
        </>
    )
}

export default Articles;