import React, { useEffect, useState } from 'react'

export default function Question() {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answer, getAnswer] = useState(null);
    const [optElement, setOptElement] = useState(null);


    useEffect(() => {
        fetch('./quiz.json')
            .then(response => response.json())
            .then(data => {
                setData(data.data)
            }).catch(error => console.error("getting some " + error));
    }, []);

    const handleNext = () => {
        if (currentIndex !== data.length - 1)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        optElement.style = "";
    };
    const handlePrev = () => {
        if (currentIndex !== 0)
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
        optElement.style = "";
    };

    const sendAnswer = (el) => {
        // let temp2 = el.target.innerText.toLowerCase().replace(/\s/g, '')
        getAnswer(el.target.innerText);
        setOptElement(el.target);
        el.target.style = "background : orange !important;"

    };

    const handleSubmit = () => {

        if (answer !== null) {
            if (answer.toLowerCase().replace(/\s/g, '') === data[currentIndex]?.correctOpt.toLowerCase().replace(/\s/g, '')) {
                document.getElementById('alertbox').innerHTML = `<strong>${answer} !</strong> You Choose the correct Option Congratulations.`
                optElement.style = "background: green ; box-shadow:  7px 7px 3px 0px rgba(0, 128, 0, 0.603); color:#fff;";
                document.getElementById('alertbox').classList.toggle('show');
                setTimeout(() => {
                    document.getElementById('alertbox').classList.toggle('show');
                    optElement.style = '';
                    getAnswer(null)
                }, 3000);
            }
            else {
                document.getElementById('alertbox').innerHTML = `<strong>${answer} !</strong> Ohh No, you Choose the wrong option`;
                optElement.style = "background: red; color:#fff";
                setTimeout(() => {
                    optElement.style = "";
                    getAnswer(null)
                }, 1000);
                document.getElementById('alertbox').classList.toggle('show');
                setTimeout(() => {
                    document.getElementById('alertbox').classList.toggle('show');
                }, 3000);
            }
        }
    }

    return (
        <>
            <div className='question-container'>
                <p className={"question"}> {data[currentIndex]?.question}</p>
                <button type='button' onClick={sendAnswer} className={`options`}> {data[currentIndex]?.opt1} </button>
                <button type='button' onClick={sendAnswer} className={`options`}> {data[currentIndex]?.opt2} </button>
                <button type='button' onClick={sendAnswer} className={`options`}> {data[currentIndex]?.opt3} </button>
                <button type='button' onClick={sendAnswer} className={`options`}> {data[currentIndex]?.opt4} </button>
                <div className="special-btn">
                    <button className="btns pre" id='previousBtn' onClick={handlePrev}>preview</button>
                    <button className="btns submit" onClick={handleSubmit}>submit</button>
                    <button className="btns next" id='nextBtn' onClick={handleNext}>next</button>
                </div>
            </div>
        </>
    );
}
