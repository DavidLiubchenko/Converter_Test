import React, {useEffect, useState} from 'react';

const Page2 = () => {
    const [formattingName, setFormattingName] = useState(['']);
    const [formattingValues, setFormattingValues] = useState([0]);

    // useEffect(() => {
    //     let arrN = [];
    //     let arrV = [];
    //     for (let key in fetchData) {
    //         arrN.push(key)
    //         arrV.push(fetchData[key])
    //     }
    //     setFormattingName(arrN)
    //     setFormattingValues(arrV)
    //
    // }, [fetchData]);

    return (
        <div>
            {formattingName.map((el, idx) => <div style={{display: "flex"}}>
                <div>{`Index:${idx}, Curr: ${formattingName[idx]}, Rate: ${formattingValues[idx]} ${1}`}</div>
            </div>)}
        </div>
    );
};

export default Page2;
