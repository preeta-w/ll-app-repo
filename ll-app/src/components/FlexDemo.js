import React from "react";

function FlexDemo() {
    return (
        <section className="specials-section">
            <section className="row">
                <article className="column col-2">Column</article>
                <article className="column col-8">Column</article>
                <article className="column col-2">Column</article>
            </section>
            <section className="row">
                <article className="column col-2">Column</article>
                <article className="column col-6">Column</article>
                <article className="column col-4">Column</article>
            </section>
        </section>
    );
}


export default FlexDemo;