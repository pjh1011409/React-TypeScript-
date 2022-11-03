import * as React from "react";
import { useState, useCallback, useRef } from "react";
const WorldRelay = () => {
  const [word, setWord] = useState("수박");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputWord = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
    (e) => {
      e.preventDefault();
      const input = inputWord.current;

      if (value.length === 1) {
        setResult("한글자 이상!");
      } else {
        if (word[word.length - 1] === value[0]) {
          setResult("딩동댕");
          setWord(value);
          setValue("");

          if (input) {
            input.focus();
          }
        } else {
          setResult("땡");
          setValue("");
          if (input) {
            input.focus();
          }
        }
      }
    },
    [word, value]
  );

  const onChangeWord = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputWord}
          type="text"
          value={value}
          onChange={onChangeWord}
        />
      </form>
      <div>{result}</div>
    </>
  );
};

export default WorldRelay;
