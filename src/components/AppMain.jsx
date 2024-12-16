import CardElement from "./CardElement";
import posts from "../../data";
import style from "./AppMain.module.css";

function AppMain() {
      
    const getSingleTags = () => {
        const tags = [];
        posts.forEach(curPost => {
            curPost.tags.forEach(curTag => {
                if (!tags.includes(curTag)) {
                tags.push(curTag);
                };
            });      
        });
    };

    const printPosts = () => {
        return posts.map((curPost) => (
            curPost.published && 
            <div className="col" key={curPost.id}>
                <CardElement 
                    image={curPost.image}
                    title={curPost.title}
                    content={curPost.content}
                    tags={curPost.tags}
                />
            </div>
        ));
    };

    return (
        <>
            <main className={style.main}>
                <div className="container">
                    <div className="row">
                        {printPosts()}
                    </div>
                </div>
            </main>        
        </>
    );
};

export default AppMain;