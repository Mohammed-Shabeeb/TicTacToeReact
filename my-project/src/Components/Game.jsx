import React, { useState, useEffect } from 'react';

function Game({ result }) {
  const initialValues = [
    ['a', 'a', 'a'],
    ['a', 'a', 'a'],
    ['a', 'a', 'a']
  ];

  const [values, setValues] = useState(initialValues);
  const [turn, setTurn] = useState(1); // 1 for 'X' and 2 for 'O'

  useEffect(() => {
    const checkResult = (values) => {
      for (let i = 0; i < 3; i++) {
        // Check rows and columns
        if (
          (values[i][0] !== 'a' && values[i][0] === values[i][1] && values[i][0] === values[i][2]) ||
          (values[0][i] !== 'a' && values[0][i] === values[1][i] && values[0][i] === values[2][i])
        ) {
          result(values[i][0] !== 'a' ? values[i][0] : values[0][i]);
          return true;
        }
      }
      // Check diagonals
      if (
        (values[0][0] !== 'a' && values[0][0] === values[1][1] && values[0][0] === values[2][2]) ||
        (values[0][2] !== 'a' && values[0][2] === values[1][1] && values[0][2] === values[2][0])
      ) {
        result(values[0][0] !== 'a' ? values[0][0] : values[0][2]);
        return true;
      }
      return false;
    };

    if (checkResult(values)) {
      // Prevent further moves if the game is won
      return;
    }

    // Toggle turn if no result
    setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
  }, [values, result]);

  const setValue = (x, y) => {
    if (values[x][y] === 'a') {
      const newValue = turn === 1 ? 'X' : 'O';
      const newValues = values.map((row, rowIndex) => 
        row.map((item, colIndex) => 
          rowIndex === x && colIndex === y ? newValue : item
        )
      );
      setValues(newValues);
    }
  };

  return (
    <div className='grid gap-0 md:gap-3 grid-cols-3 grid-rows-3'>
      {values.map((row, rowIndex) => (
        row.map((item, colIndex) => (
          <div 
            key={`${rowIndex}-${colIndex}`} 
            className='w-32 h-32 border-8 border-solid border-slate-300 hover:border-teal-200 flex items-center justify-center' 
            onClick={() => setValue(rowIndex, colIndex)}
          >
            <section className='text-slate-300 text-8xl'>{item === 'a' ? '' : item}</section>
          </div>
        ))
      ))}
    </div>
  );
}

export default Game;
