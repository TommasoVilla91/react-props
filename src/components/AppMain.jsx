import CardElement from "./CardElement";
import posts from "../../data";
import style from "./AppMain.module.css";

function AppMain() {

    const printPosts = () => {
        return posts.map((curPost) => (
            <div className="col" key={curPost.id}>
                <CardElement 
                    image={curPost.image}
                    title={curPost.title}
                    content={curPost.content}
                    tags={curPost.tags}
                    published={curPost.published}
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
    )
}

export default AppMain;