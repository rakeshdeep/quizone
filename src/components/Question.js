import React, { useEffect, useState } from 'react'

export default function Question() {
    const [data, setData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(()=>{
        fetch('./quiz.json')
            .then(response => response.json())
            .then(data =>{
                setData(data.data)
                console.table(data.data)
            }).catch(error => console.error("getting some "+error));
    },[]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 ) % data.length);
    };

    return (
        <>
            <div className='question-container'>
                <p className={"question"}> {data[currentIndex]?.question}</p>
                <p className={`options`}>{data[currentIndex]?.opt1}</p>
                <p className={`options`}>{data[currentIndex]?.opt2}</p>
                <p className={`options`}>{data[currentIndex]?.opt3}</p>
                <p className={`options correct`}>{data[currentIndex]?.opt4}</p>
                <div className="special-btn">
                    <button className="btns pre">preview</button>
                    <button className="btns submit">submit</button>
                    <button className="btns next" onClick={handleNext}>next</button>
                </div>
            </div>
        </>
    );
}
