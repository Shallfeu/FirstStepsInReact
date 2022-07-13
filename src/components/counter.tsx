import React from 'react';

type CounterProps = {
  key: number;
  id: number;
  value: number;
  name: string;
  onDelete: (id: number) => void;
};

const Counter: React.FC<CounterProps> = ({ value, name, id, onDelete }) => {
  const formatValue = () => {
    return value <= 0 ? 'empty' : value;
  };

  const getBageClasses = () => {
    let classes = 'badge m-2 ';
    classes += value <= 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  };

  const handleIncrement = () => {
    // setValue(value + 1);
  };

  const handleDecrement = () => {
    // setValue(value - 1);
  };

  return (
    <div>
      <span>{name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>
        delete
      </button>
    </div>
  );
};

export default Counter;
