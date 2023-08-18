import React from "react";


const Hero = (props) => {

   const ShowButton = () => {
        const btnText = (props.btnText);
        let Button;

        if (btnText) {
            Button = <button className="button">{btnText}</button>
        } else {
            Button = null
        };

        return (Button);
    }

    return (
        <section className="hero-section row home-section-styles">

            <section className="column col-4">
                <h1 id="hero">{props.pageTitle}</h1>
                <h2 className="spacer-24"style={{color:"white"}}>{props.subhead}</h2>
                <p class="lead-text spacer-24" style={{color:"white"}}>
                    {props.description}
                </p>
                <ShowButton />
            </section>

            <section className="column col-4">
                <img src={props.imgsrc} className="hero-img" alt={props.imgsrc}/>
            </section>
            
        </section>
    );
}


export default Hero;