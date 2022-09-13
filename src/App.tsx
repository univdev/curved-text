import React, { ChangeEventHandler, useState } from 'react';
import './App.css';
import { CurvedText } from './components/CurvedText';
import { Slider } from './components/Slider';
import Styles from './index.module.css';

function App() {
  const [value, setValue] = useState<number>(1);

  const onChangeValue: ChangeEventHandler = (event) => {
    const target = event.target as HTMLInputElement;

    setValue(target.value as unknown as number);
  };

  return (
    <div className={Styles.App}>
      <Slider
        value={value}
        onChange={onChangeValue}
      ></Slider>
      <CurvedText
        text="가나다라마바사아자차카타파하나타파라나마나나"
        className={Styles.CurvedText}
        value={value}
      ></CurvedText>
    </div>
  );
}

export default App;
