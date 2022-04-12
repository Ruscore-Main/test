import React from "react";
import PropType from "prop-types";



const Categories = ({ items = [] }) => {
    const [active, setActive] = React.useState(-1);
  return (
    <div className="categories">
      <ul>
        <li className={`${active == -1 ? 'active' : ''}`} onClick={()=>setActive(-1)}>Все</li>
        {items.map((el, index) => (
          <li key={`${el}-${index}`} className={`${active == index ? 'active' : ''}`} onClick={() => setActive(index)}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  items: PropType.arrayOf(PropType.string),
};

// Можно либо здесь указать пропсы по умолчанию, либо в деструктуризации самого объекта
// Categories.defaultProps = {
//   items: []
// }

export default Categories;
