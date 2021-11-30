
import React from 'react';
import './Navigate.css';

interface IProps {
   handleClick: Function;
}

const Navigate: React.FC<IProps> = ({handleClick}) => {


  return (
        <div className="navigate">
            <button className="nav" onClick={() => handleClick("back")}>Back</button>
            <button className="nav" onClick={() => handleClick("submit")}>Finish</button>
            <button className="nav" onClick={() => handleClick("next")}>Next</button>
        </div>
  );
};

export default Navigate;




