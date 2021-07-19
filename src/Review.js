import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRandom } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1){
      return 0
    }
    if (number < 0){
      return people.length - 1
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    })
  }
  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random * people.length);
     return
  }

  return (
  <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn">
        <FaChevronLeft onClick={prevPerson} />
      </button>
      <button className="random-btn">
        <FaRandom onClick={randomPerson}/>
      </button>
      <button className="next-btn">
        <FaChevronRight onClick={nextPerson} />
      </button>
      
    </div>
    </article>);
};

export default Review;
