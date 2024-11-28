import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
  }
  h1 {
    font-size: 40px;
  }

  p {
    font-size: 25px;
  }

  h3 {
    font-size: 15px;
  }

  h5 {
    font-size: 15px;
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <h1>무료 성격 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <ul>
        <li>
          <h3>성격 유형 검사</h3>
          <h5>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </h5>
        </li>
        <li>
          <h3>성격 유형 이해</h3>
          <h5>
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </h5>
        </li>
        <li>
          <h3>팀 평가</h3>
          <h5>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </h5>
        </li>
      </ul>

      <Link to="/login">로그인하기</Link>
    </HomeStyle>
  );
};

export default Home;
