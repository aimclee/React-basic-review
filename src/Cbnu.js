import React from "react";
import PropTypes from "prop-types";

function Cbnu({ num, AverageEY, slogan }) {
  return (
    <div>
      <h2>총 인원수는 {num}명이다.</h2>
      <h2>평균 학번은 {AverageEY}이고</h2>
      <h2>{slogan}</h2>
    </div>
  );
}

Cbnu.propTypes = {
  name: PropTypes.number.isRequired,
  AverageEY: PropTypes.number.isRequired,
  slogan: PropTypes.string.isRequired
};

export default Cbnu;
