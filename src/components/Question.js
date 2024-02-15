import React from 'react'

export default function Question() {
    

    return (

        <>
            

            <div className='question-container'>
                <p className={"question"}>What is the capital Of India ?</p>
                <p className={`options`}>Korea</p>
                <p className={`options`}>taliban</p>
                <p className={`options`}>Pakistan</p>
                <p className={`options correct`}>India</p>
                <div className="special-btn">
                    <button className="btns pre">preview</button>
                    <button className="btns submit">submit</button>
                    <button className="btns next">next</button>
                </div>
            </div>
        </>
    );
}
