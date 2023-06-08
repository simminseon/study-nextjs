'use client';

import { useState } from 'react';

function List() {
  const food = ['Tomatoes', 'Pasta', 'Coconut'];
  const [count, setCount] = useState([0, 0, 0]);
  const onClick = (test) => {
    setCount(test + 1);
  };
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {count &&
        count.map((data) => (
          <div key={data}>
            <span>{data}</span>
            {/* <button onClick={() => onClick(data)}>+</button> */}
          </div>
        ))}

      {food.map((food, index) => (
        <div className="food" key={food}>
          <img src={`/food${index}.png`} className="food-img" alt={food} />
          <h4>{food} $40</h4>
          <span>{count}</span>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
          <button onClick={() => setCount((prev) => prev - 1)}>+</button>
        </div>
      ))}
    </div>
  );
}

export default List;
