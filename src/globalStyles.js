import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  }
  .draw-border {
    box-shadow: inset 0 0 0 4px #58afd1;
    color: #58afd1;
    transition: color 0.25s 0.0833333333s;
    position: relative;
  }
  .draw-border::before,
  .draw-border::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
  }
  .draw-border::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }
  .draw-border::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }
  .draw-border:hover {
    color: #e21114;
  }
  .draw-border:hover::before,
  .draw-border:hover::after {
    border-color: #e21114;
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }
  .draw-border:hover::before {
    transition-delay: 0s, 0s, 0.25s;
  }
  .draw-border:hover::after {
    transition-delay: 0s, 0.25s, 0s;
  }

  .btn {
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 1.2rem "Roboto Slab", sans-serif;
    padding: 1em 2em;
    letter-spacing: 0.05rem;
    width: fit-content;
  }
  .btn:focus {
    outline: 0px  ;
  }
`;

export default GlobalStyle;
