import styled from "styled-components";

const CustomizeWrapper = styled.section`
  position: relative;

  .btn-customize {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-black);
    color: var(--primary-white);
    font-size: 1.25rem;
    border: none;
    padding: 0.5rem 1rem;
    z-index: 10;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    inset: 0 0 0 0;
    height: 0;
    overflow: hidden;

    &.show {
      height: 100vh;
      overflow: hidden;
    }
  }

  .label {
    position: fixed;
    top: 150px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
  }
  .colors-wrapper {
    position: fixed;

    gap: 0.5rem;
    z-index: 10;
    width: 100%;
    height: fit-content;
    cursor: pointer;
    top: 60px;

    display: none;
  }
  .show-colors {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .single-color {
    background: white;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 2px solid #fff99f;
    border-radius: 50%;
    transition: 0.2s linear all;
  }
  .is-active {
    transform: scale(1.2);
    border-radius: 20%;
  }

  @media screen and (min-width: 800px) {
    .colors-wrapper {
      width: fit-content;
      flex-direction: column;
      top: 50%;
      right: 40px;
      transform: translateY(-50%);
      gap: 1rem;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
`;
export default CustomizeWrapper;
