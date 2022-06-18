import Image from "next/image"
import { useState } from "react"
import styles from "../styles/Welcome.module.css"

const Welcome = () => {
    
    const [index, setIndex] = useState(0);
    let fclicks = 0;
    let bclicks = 5;

    const texts = [
        "Ethical",
        "Transparent",
        "Impactful",
        "Optimize",
        "Discover",
        "Transform"
    ];

    const handleArrow = (direction) => {
        if(direction === "l"){
            setIndex(index !== 0 ? index - 1 : 5)
        }
        if(direction === "r"){
            setIndex(index !== 5 ? index + 1 : 0)
        }
    }

    // fix this: increment array value by 1 and display when arrow is clicked vice versa for other arrow (but with decrement)

    const changeText = (direction) => {

        if(direction === "l"){
            bclicks -= 1;
            let words = document.getElementById("word");
            words.innerText = texts[bclicks];
            
            if(bclicks < 0){
                bclicks = 5;
                words.innerText = texts[bclicks];
            }
        }
        if(direction === "r"){
            fclicks += 1;
            let words = document.getElementById("word");
            words.innerText = texts[fclicks];  

            if(fclicks > 5){
                fclicks = 0;
                words.innerText = texts[fclicks];
            }
        }


    }

    console.log(index)

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <span className={styles.wImage}>
                        <Image src="/img/logo.png" width="431"height="134" />
                    </span>
                    <h2 className={styles.message}>
                        HAL Group manages all your it solutions for you and
                        Gives you access to them wherever and whenever.
                    </h2>

                </div>
                <div className={styles.itemOne}>
                    <div className={styles.slider}>
                        <div className={styles.arrowContainer}>
                            <Image src = "/img/arrowr.png" width="10" height="20" style={{left:0}} onClick={() => changeText("l")} objectFit="contain"/>
                        </div>
                        
                        <div className={styles.words}>
                            <div className={styles.word} id="word">
                                Ethical
                            </div>
                        </div>
                        
                        {/* <div className={styles.sliderText} style={{transform:`translateX(${-50 * index}px)`}}>
                            {texts.map((img, i ) => (
                                <div className={styles.textsContainer} key={i}>
                                    <Image src={img} layout="fill" objectFit="contain"/>
                                </div>
                            ))}
                        </div> */}
                        <div className={styles.arrowContainer}>
                            <Image src = "/img/arrowl.png" width="10" height="20" style={{right:0}} onClick={() => changeText("r")} objectFit="contain"/>
                        </div>
                    </div>
                </div>
            </div>
                <div className={styles.flagWrapper}>
                    <div className={styles.countries}>
                        <Image src="/img/ke.png" width="60" height="60" />
                    </div>
                    <div className={styles.countries}>
                        <Image src="/img/oman.png" width="60" height="60" />
                    </div>
                    <div className={styles.countries}>
                        <Image src="/img/tz.png" width="60" height="60" />
                    </div>
                </div>
        </div>
    )
}

export default Welcome