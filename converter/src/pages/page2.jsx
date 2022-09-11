import React, {useEffect, useState} from 'react';

const Page2 = () => {
    const [formattingName, setFormattingName] = useState(['']);
    const [formattingValues, setFormattingValues] = useState([0]);

    return (
        <div>
            {formattingName.map((el, idx) => <div style={{display: "flex"}}>
                <div>{`Index:${idx}, Curr: ${formattingName[idx]}, Rate: ${formattingValues[idx]} ${1}`}</div>
            </div>)}
        </div>
    );
};

export default Page2;
