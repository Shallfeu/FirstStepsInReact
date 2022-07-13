import React from 'react';
import Counter from './counter';

const CountersList: React.FC = () => {
  const initialState = [
    { id: 0, value: 1, name: 'Ненужнаая вещь' },
    { id: 1, value: 2, name: 'Ложка' },
    { id: 2, value: 3, name: 'Вилка' },
    { id: 3, value: 4, name: 'Тарелка' },
    { id: 4, value: 5, name: 'Набор минималиста' },
  ];

  const [counters, setCounters] = React.useState([
    { id: 0, value: 1, name: 'Ненужнаая вещь' },
    { id: 1, value: 2, name: 'Ложка' },
    { id: 2, value: 3, name: 'Вилка' },
    { id: 3, value: 4, name: 'Тарелка' },
    { id: 4, value: 5, name: 'Набор минималиста' },
  ]);

  const handleDelete = (id: number) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id: number) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id: number) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
