import styled from 'styled-components';

export const Wrapper = styled.div`
  .question-container {
    width: 100%;
    text-align: left;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 20px;
    background: transparent;
    border: none;
    cursor: pointer;

    &.active {
      color: #1db954;
      background-image: linear-gradient(
        90deg,
        transparent,
        rgba(0, 0, 0, 0.04),
        transparent
      );
    }

    &:hover {
      background-image: linear-gradient(
        90deg,
        transparent,
        rgba(0, 0, 0, 0.04),
        transparent
      );
    }
  }

  .arrow {
    font-size: 2rem;
    transition: 0.5s ease-in-out;

    &.active {
      rotate: 180deg;
      color: #1db954;
    }
  }

  .answer-container {
    padding: 0 1rem;
    transition: height 0.7s ease-in-out;
  }

  .answer-content {
    padding: 1rem 0;
    font-size: 20px;
    font-style: italic;
  }
`;
