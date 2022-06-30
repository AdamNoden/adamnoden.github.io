import React, { useEffect } from "react";
import styled from "styled-components";
import ControlRoomImage from "../images/control-room-a.jpg";

const Root = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  padding: 40px 60px 100px 40px;
  width: 300px;
`;
const CoverImage = styled.div`
  background-image: url(${ControlRoomImage});
  flex: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover a {
    color: white;
    transition: color 0.3s ease;
  }
`;

const ImageSource = styled.a`
  transition: color 0.3s ease;
  color: transparent;
  font-style: italic;
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 10px;
`;

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Adam Noden";
  }, []);

  return (
    <Root>
      <Content>
        <h2>About me</h2>
        <p>London based software engineer - mostly working on web UI&apos;s.</p>

        <p>
          Contact via&nbsp;
          <a
            href="https://www.linkedin.com/in/adam-noden/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          &nbsp;or&nbsp;
          <a
            href="https://github.com/adamnoden"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </Content>
      <CoverImage>
        <ImageSource
          target="_blank"
          rel="noreferrer"
          href="https://batterseapowerstation.co.uk/news/article/battersea-power-station-unveils-newly-restored-control-room-a"
        >
          Battersea Power Station - Control Room A
        </ImageSource>
      </CoverImage>
    </Root>
  );
};
