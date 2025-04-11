import { useState } from "react";
import "./ProductCard.module.css";

export function ProductCard({
    product,
    onPurchase,
    onFavorite,
    background = "slategray",
    isFavorite,
})
{
    const [ showMore, setShowMore ] = useState(false);

    function handleClick() {
        onPurchase(product.id, product.stockCount - 1);
    }

    function handleTwoClicks(){
        onPurchase(product.id, product.stockCount - 2);
    }

    return(
        <article className={Styles.container} style={background}>
            <button className={styles.Favorite}
                onClick={() => onFavorite(product.id)}
            >
            {isFavorite? red_heart: white_heart}
            </button>
            <img 
                src={product.imgSrc}
                alt={product.title}
                width={128}
                height={128}
            />

            <p>
                specification:{" "}
                <button onClick={() => setShowMore(!showMore)}>
                    {showMore? "hide": "show"}
                </button>

                {showMore && (
                    <ul className={styles.specification}>
                        {product.specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                )}
            </p>
            <Status stockCount={product.stockCount} />
            {product.stockCount > 0 && (
                <>
                    <p>price: ${product.price}</p>
                    <button onClick={handleClick}>buy 1</button>
                </>
            )}
            {product.stockCount > 1 && (
                <button onClick={handleTwoClicks}>buy 2</button>
            )}

        </article>
    );

    function Status( {stockCount} ){
        const notAvailableTemplate = (
            <p className={styles.notAvailableStatus}>
                Not available
            </p>
        );

        const availableTemplate = (
            <p className={styles.availableStatus}>
                {stockCount} items available
            </p>
        );

        return stockCount === 0? notAvailableTemplate: availableTemplate}




    }

function setColor(){
    const [color, setColor] = useState("red");

    return(
        <>
            <button type="button" onClick = {() => setColor("blue")}>
                blue
            </button>
            <button type="button" onClick = {() => setColor("Orange")}>
                orange
            </button>
        </>
    );
}