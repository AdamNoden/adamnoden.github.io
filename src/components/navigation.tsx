import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div``;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 7px;
`;

interface NavLinkContentProps {
  isActive: boolean;
  to: string;
}
const NavLinkContent: React.FC<NavLinkContentProps> = ({ isActive, to }) => (
  <span>
    {to}
    {isActive && <span>&nbsp; &#8592;</span>}
  </span>
);

export const Navigation: React.FC = () => {
  return (
    <Root>
      <List>
        <ListItem>
          <NavLink to="/">
            {({ isActive }) => <NavLinkContent isActive={isActive} to="Home" />}
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact">
            {({ isActive }) => (
              <NavLinkContent isActive={isActive} to="Contact" />
            )}
          </NavLink>
        </ListItem>
      </List>
    </Root>
  );
};
