import React from 'react';
import './RoundButton.css';

const RoundButton = ({ size = '4rem', onClick }) => {
  return (
    <button
      className="round-button"
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="39" viewBox="0 0 13 39" fill="none">
        <path d="M7.25781 1C7.25781 0.585786 6.92203 0.25 6.50781 0.25C6.0936 0.25 5.75781 0.585786 5.75781 1L6.50781 1L7.25781 1ZM5.97748 38.5303C6.27038 38.8232 6.74525 38.8232 7.03815 38.5303L11.8111 33.7574C12.104 33.4645 12.104 32.9896 11.8111 32.6967C11.5182 32.4038 11.0433 32.4038 10.7505 32.6967L6.50781 36.9393L2.26517 32.6967C1.97228 32.4038 1.49741 32.4038 1.20451 32.6967C0.911621 32.9896 0.911621 33.4645 1.20451 33.7574L5.97748 38.5303ZM6.50781 1L5.75781 1L5.75781 38L6.50781 38L7.25781 38L7.25781 1L6.50781 1Z" fill="white"/>
      </svg>
    </button>
  );
};

export default RoundButton;