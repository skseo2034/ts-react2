import React, {useCallback, useRef, useState} from "react";
import Try from "./Try";

const getAnswer = () => {
        const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array = [];
        for (let i = 0; i < 4; i += 1) {
            const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            array.push(chosen);
        }
        return array;
}

const NumberBaseball = () => {
    const [answer, setAnswer] = useState(getAnswer());
    const [result, setResult] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [tryCount, setTryCount] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const input = inputRef.current;

    const onSubmitForm = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue == answer.toString()) {
            setResult('홈런');
            if (!confirm('게임을 다시 시작 할까요?')) {
                return;
            }

            setAnswer(getAnswer());
            setResult('');
            setInputValue('')
            if (input) {
                input.focus();
            }
        } else {
            setTryCount(prevState => prevState + 1);
        }
    }, [inputValue, result, answer, tryCount]);


    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
      <>
          <h1>{result}</h1>
          <form onSubmit={onSubmitForm}>
              <input maxLength={4} ref={inputRef} onChange={onChangeInput} value={inputValue}/>
          </form>
          <Try tryCount={tryCount} />
      </>
    );
}

export default NumberBaseball;