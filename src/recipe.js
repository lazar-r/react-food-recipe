import React from 'react';
import style from './recipe.module.scss';
const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories} kCal</p>
            <img src={image} alt="" className={style.img}/>
            <div>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </div>
        </div>
    )
}

export default Recipe;