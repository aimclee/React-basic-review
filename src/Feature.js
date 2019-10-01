import React from "react";

function FrontEnd3({ schedule }) {
  return (
    <div>
      <ul>
        <h2>운영진 : 이민철</h2>
        <h2>멤버 : 구기연, 강성민, 임민혁, 김효재, 정내혁</h2>
      </ul>
      <ul>
        <h2>일정 : {schedule}에 밥약이 있어용~!(무료!!)</h2>
      </ul>
    </div>
  );
}

export default FrontEnd3;
