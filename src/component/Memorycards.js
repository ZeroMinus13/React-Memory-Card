import React from 'react';
import item1 from '../images/item1.png';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item4 from '../images/item4.png';
import item5 from '../images/item5.png';
import item6 from '../images/item6.png';
import item7 from '../images/item7.png';
import item8 from '../images/item8.png';
import item9 from '../images/item9.png';
import item10 from '../images/item10.png';

export default function Memorycards(props) {
  const imagearr = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function imagefunc() {
    let random = shuffleArray(imagearr);
    return random.map((img, i) => {
      return (
        <div key={i}>
          <img src={img} alt={[i]} onClick={props.play} />
        </div>
      );
    });
  }
  return <div className="images">{imagefunc()}</div>;
}
