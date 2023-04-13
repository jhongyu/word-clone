import React from 'react';

import { range } from '../../utils';
import { KEY_BOARD } from '../../constants';

function Key({ value, checkResult }) {
  const [className, setClassName] = React.useState('');

  React.useEffect(() => {
    if (checkResult) {
      const index = checkResult.findIndex((item) => item.letter === value);
      if (index >= 0) {
        setClassName(`key ${checkResult[index].status}`);
      }
    } else {
      setClassName('key');
    }
  }, [checkResult, value]);

  return <div className={className}>{value}</div>;
}

function Row({ keys, checkResult }) {
  return (
    <div className="row">
      {keys.map((value) => (
        <Key key={value} value={value} checkResult={checkResult} />
      ))}
    </div>
  );
}

function Keyboard({ checkResult }) {
  return (
    <div className="keyboard">
      {range(3).map((num) => (
        <Row key={num} keys={KEY_BOARD[num]} checkResult={checkResult} />
      ))}
    </div>
  );
}

export default Keyboard;
