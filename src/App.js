import React from "react";
import FrontEnd3 from "./Feature";
import Cbnu from "./Cbnu";

/* 주석 시작1 - about props

function Likelion() {
  return <h1>멋사 7기</h1>;
}

const Jbnu = [
  //동적 컴포넌트 생성 1단계
  {
    id: 1, // key값 추가
    num: 28,
    AverageEY: 2016,
    slogan: "코딩을 배우고자 한다면 멋사를 들이십시오."
  }
];


 주석 끝 */

// ctrl + /로 만들 수 있음
// function App() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {/* 동적 컴포넌트 생성 2단계 */}
//       {Jbnu.map(f => (
//         <Cbnu
//           num={f.num}
//           AverageEY={f.AverageEY}
//           slogan={f.slogan}
//           key={f.id}
//         />
//       ))}

//       <Likelion />
//       <FrontEnd3 schedule="11/11" />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      content: ""
    };
    console.log("생성자 입니다. 첫번째 실행되죠.");
  }

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  remove = () => {
    this.setState({ count: 0 });
  };

  handlingChange = event => {
    this.setState({ content: event.target.value });
  };

  componentDidMount() {
    console.log("mount 완료!");
  }

  componentDidUpdate() {
    console.log("updated.");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    console.log("렌더 함수 입니다. 두번째 실행되죠.");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.remove}>remove</button>

        <br></br>
        <br></br>

        <textarea
          value={this.state.content}
          onChange={this.handlingChange}
        ></textarea>
      </div>
    );
  }
}

export default App;
