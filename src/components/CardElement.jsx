import InfoButton from "./InfoButton";
import style from "./CardElement.module.css";

function CardElement() {

    return (
        <>
            <div className={style.card}>
                <div className={style.image}></div>
                <div className={style.text}>
                    <h3 className={style.title}>Titolo del Post</h3>
                    <p className={style.infos}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam excepturi quaerat fugiat natus cupiditate corporis quo aspernatur nobis in animi inventore quis provident hic accusantium, tempora saepe deserunt, fugit ratione.
                    </p>
                    <InfoButton />
                </div>                
            </div>
        </>
    )
}

export default CardElement;