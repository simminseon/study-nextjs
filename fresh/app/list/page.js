import Image from 'next/image';
import TomatoImage from '/public/food0.png';

const food = ['Tomatoes', 'Pasta', 'Coconut'];

function List() {
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {food.map((food, index) => (
        <div className="food" key={food}>
          <h4>{food} $40</h4>
          <img src={`/food${index}.png`} className="food-img" alt={food} />
        </div>
      ))}
    </div>
  );
}

export default List;
