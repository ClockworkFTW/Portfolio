import React from "react";
import styled from "styled-components";

import { Icon, Scroll } from "../components/Common";

const links = [
  { title: "Resume", href: "", iconType: "fas", iconName: "file-contract" },
  { title: "Code", href: "", iconType: "fab", iconName: "github" },
  { title: "Contact", href: "", iconType: "fas", iconName: "paper-plane" },
];

const Home = () => (
  <Wrapper>
    <Container>
      <Content>
        <Avatar src="https://avatars1.githubusercontent.com/u/4710242" />
        <Name>John Nikolas Boyle</Name>
        <Bio>Aspiring Full-Stack JavaScript Developer</Bio>
        <More>
          As a tech fanatic, building web applications is my ultimate passion.
        </More>
        <Links>
          {links.map(({ title, href, iconType, iconName }) => (
            <Link href={href}>
              <Icon icon={[iconType, iconName]} />
              <span style={{ marginLeft: "10px" }}>{title}</span>
            </Link>
          ))}
        </Links>
      </Content>
    </Container>
    <Scroll />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Content = styled.div`
  text-align: center;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

const Name = styled.h1`
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 600;
  color: #111111;
`;

const Bio = styled.h2`
  margin-bottom: 30px;
  font-size: 20px;
  color: #4a4a4a;
`;

const More = styled.p`
  color: #4a4a4a;
`;

const Links = styled.div`
  margin-top: 16px;
`;

const Link = styled.a`
  display: inline-block;
  margin: 2px;
  padding: 16px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 22px;
  color: #111111;
  &:hover {
    background: #f7f7f8;
  }
`;

export default Home;
