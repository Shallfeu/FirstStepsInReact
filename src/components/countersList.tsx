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

  const updatedState = [
    { id: 0, value: 6, name: 'Ненужнаая вещь' },
    { id: 1, value: 6, name: 'Ложка' },
    { id: 2, value: 6, name: 'Вилка' },
    { id: 3, value: 6, name: 'Тарелка' },
    { id: 4, value: 6, name: 'Набор минималиста' },
  ];

  const [counters, setCounters] = React.useState([
    { id: 0, value: 1, name: 'Ненужнаая вещь' },
    { id: 1, value: 2, name: 'Ложка' },
    { id: 2, value: 3, name: 'Вилка' },
    { id: 3, value: 4, name: 'Тарелка' },
    { id: 4, value: 4, name: 'Набор минималиста' },
  ]);

  const handleDelete = (id: number) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleUpdate = () => {
    setCounters(updatedState);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} onDelete={handleDelete} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>
        Update
      </button>
    </>
  );
};

export default CountersList;
