import * as React from "react";
import {useRef, useState, useCallback, useContext} from "react";

const WordRelay = () => {
    const [givenWord, setGivenWord] = useState('수교');
    const [result, setResult] = useState('');
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmitForm = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const input = inputRef.current
       // if (givenWord.substring(givenWord.length -1, givenWord.length) === inputValue.substring(0, 1)) {
        if (givenWord[givenWord.length -1] === inputValue[0]) {
            setResult('딩동댕');
            setGivenWord(inputValue);
            setInputValue('');
        } else {
            setResult('땡');
        }

       if (input) {
            input.focus();
       }

    }, [inputValue, givenWord, result]);

    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, [inputValue]);

    return (
        <>
            <div>{givenWord}</div>
            <form>
                <input ref={inputRef} onChange={onChangeInput} value={inputValue}/>
            </form>
            <button onClick={onSubmitForm}>입력!</button>
            <div>{result}</div>
        </>
    );
}

export default WordRelay;