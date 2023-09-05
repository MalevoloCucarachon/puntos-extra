import React from 'react';
import "./Main.css";
const Main = () => {

    const img = {
        backgroundImage: `url("https://www.amormeus.org/web/wp-content/uploads/2020/03/CHRISTUS-Muguerza-crea-Test-en-li%CC%81nea-para-COVID-19-scaled.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
       }
    return (
        <>
            <main className='main' style = {img}>
                <h1>MEDICAL SERVICE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam saepe eos,
                    sequi ipsa sunt dignissimos ex sed dolorem, sint, iusto ab excepturi magnam porro
                    ratione ut fugit repudiandae! Nulla.</p>

                <button>READ MORE</button>
            </main>
        </>
    )
}

export default Main