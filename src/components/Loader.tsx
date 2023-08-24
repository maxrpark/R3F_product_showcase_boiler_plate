import React from "react";
import styled from "styled-components";

interface Props {
  progress: number;
}

const Loader: React.FC<Props> = ({ progress }) => {
  return (
    <Wrapper>
      <p>{Math.floor(progress)}%</p>
      <span className='loader'></span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--primary-yellow);

  p {
    font-size: 4rem;
    color: #ff6f61;
  }

  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation-fill-mode: both;
    animation: bblFadInOut 1.8s infinite ease-in-out;
  }
  .loader {
    color: #ff6f61;
    position: relative;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -2rem;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 2rem;
  }

  @keyframes bblFadInOut {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
export default Loader;
