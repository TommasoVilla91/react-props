import CardElement from "./CardElement";
import style from "./AppMain.module.css";

function AppMain() {

    return (
        <>
            <main className={style.main}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <CardElement />
                        </div>
                    </div>
                </div>
            </main>        
        </>
    )
}

export default AppMain;