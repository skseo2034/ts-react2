import React from "react";
import { useState, useRef, useEffect } from "react";

const repCoords = { // 이미지의 좌표
    바위: '0',
    가위: '-142px',
    보: '-284px'
} as const;

const scores = {
    가위: 1,
    바위: 0,
    보: -1
} as const;

type ImgCoords = typeof repCoords[keyof typeof repCoords];
//type imgCoords = '0' | '-42epx' | '-284px';
/*interface imgCoords {
    바위: '0',
    가위: '-142px',
    보: '-284px'
}*/

const computerChoice = (imgCoords: ImgCoords) => {
    return (Object.keys(repCoords) as ['바위', '가위', '보']).find((k) => {
        return repCoords[k] === imgCoords;
    });
}

const RSP = () => {
    const [imgCoord, setImgCoord] = useState(repCoords.바위);
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);

    const interval = useRef();

    useEffect(() => { // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
        console.log('다시 실행');
        interval.current = window.setInterval(changeHand, 100);
        return () => { // componentWillUnmount 역할
            console.log('종료');
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    };

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = setScore(computerChoice(imgCoord));
        const diff = myScore - cpuScore;

        if (diff === 0) {
            setResult('비겼습니다!');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('졌습니다!');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = window.setInterval(changeHand, 100);
            clicked.current = false;
        }, 1000);
    }


    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    )
}

export default RSP;
