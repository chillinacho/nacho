import React from "react";
import * as Styled from "./Home.style";
import { Header } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
  const title = "home of nacho archive website";
  return (
    <div>
      <Header title={title} />
      <Styled.Paragraph>projects:</Styled.Paragraph>
      <Styled.ProjectsList>
        <Styled.Project>
          <Link to="/allesvinyl">allesvinyl</Link>
        </Styled.Project>
        <Styled.Project>
          <Link to="/monolith">monolith</Link>
        </Styled.Project>
        <Styled.Project>
          <Link to="/hoduCollection">hoduCollection</Link>
        </Styled.Project>
        <Styled.Project>
          <Link to="/squidGame">squidGame</Link>
        </Styled.Project>
        <Styled.Project>
          <Link to="/wanderer">wanderer</Link>
        </Styled.Project>
      </Styled.ProjectsList>
    </div>
  );
};

export default Home;
