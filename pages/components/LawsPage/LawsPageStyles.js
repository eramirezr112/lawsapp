import styled from "styled-components";

export const LawsPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  background: #fdfdfd;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #212121;
  display: flex;

  header {
    display: flex;
    position: fixed;
    width: 100%;
    height: 70px;
    background: #233f78;
    color: #fff;
    justify-content: center;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  main {
    padding-top: 70px;
    display: flex;
    height: 100%;
    width: 100%;

    .content {
      display: flex;
      width: 100%;
    }

    .column-left {
      display: flex;
      height: 100%;
      width: 25%;
      background: #f5f5f5;
      padding: 1rem;
      overflow: auto;
    }

    .column-right {
      background: #fff;
      height: 100%;
      width: 75%;
      padding: 1rem;
    }
  }

  main h2 span {
    color: #bf7497;
  }

  main p {
    line-height: 1.5;
    font-weight: 200;
    margin: 20px 0;
  }

  main small {
    font-weight: 300;
    color: #888;
  }

  #nav-container {
    position: absolute;
    height: 100vh;
    width: 100%;
    pointer-events: none;
    z-index: 1000;
  }
  #nav-container .bg {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100% - 70px);
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    background: #000;
  }
  #nav-container:focus-within .bg {
    visibility: visible;
    opacity: 0.6;
  }
  #nav-container * {
    visibility: visible;
  }

  .button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    -webkit-appearance: none;
    border: 0;
    background: transparent;
    border-radius: 0;
    height: 70px;
    width: 30px;
    cursor: pointer;
    pointer-events: auto;
    margin-left: 25px;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .icon-bar {
    display: block;
    width: 100%;
    height: 3px;
    background: #fff;
    transition: 0.3s;
  }
  .icon-bar + .icon-bar {
    margin-top: 5px;
  }

  #nav-container:focus-within .button {
    pointer-events: none;
  }
  #nav-container:focus-within .icon-bar:nth-of-type(1) {
    transform: translate3d(0, 8px, 0) rotate(45deg);
  }
  #nav-container:focus-within .icon-bar:nth-of-type(2) {
    opacity: 0;
  }
  #nav-container:focus-within .icon-bar:nth-of-type(3) {
    transform: translate3d(0, -8px, 0) rotate(-45deg);
  }

  #nav-content {
    margin-top: 70px;
    padding: 20px;
    width: 90%;
    max-width: 300px;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100% - 70px);
    background: #ececec;
    pointer-events: auto;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transform: translateX(-100%);
    transition: transform 0.3s;
    will-change: transform;
    contain: paint;
  }

  #nav-content ul {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #nav-content li a {
    padding: 10px 5px;
    display: block;
    text-transform: uppercase;
    transition: color 0.1s;
  }

  #nav-content li a:hover {
    color: #bf7497;
  }

  #nav-content li:not(.small) + .small {
    margin-top: auto;
  }

  .small {
    display: flex;
    align-self: center;
  }

  .small a {
    font-size: 12px;
    font-weight: 400;
    color: #888;
  }
  .small a + a {
    margin-left: 15px;
  }

  #nav-container:focus-within #nav-content {
    transform: none;
  }
`;
