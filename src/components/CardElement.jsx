import InfoButton from "./InfoButton";
import style from "./CardElement.module.css";

function CardElement(props) {

    return (
        <>
            <div className={style.card}>
                <div className={style.image}>
                    {/* <img src={props.image}/> */}
                </div>
                <div className={style.text}>
                    <h3 className={style.title}>
                        {props.title}
                    </h3>
                    <p className={style.content}>
                        {props.content}
                    </p>
                    <p className={style.tags}>
                        {props.tags.join(', ')}
                    </p>
                    <InfoButton />
                </div>                
            </div>
        </>
    )
}

export default CardElement;