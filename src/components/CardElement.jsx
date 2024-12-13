import InfoButton from "./InfoButton";
import style from "./CardElement.module.css";

function CardElement(props) {

    const tags = props.tags;

    const printTags = () => {
        return tags.map((tag, index) => (
        <li className={`${style.tagElem} ${tag}`} key={index}>{tag}</li>
        ));
    };

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
                    <ul className={style.tags}>
                       {printTags()} 
                    </ul>                    
                    <InfoButton />
                </div>                
            </div>
        </>
    );
};

export default CardElement;