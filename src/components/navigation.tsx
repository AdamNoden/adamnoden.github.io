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

const navItems = [
  {
    name: "Home",
    path: "/",
    active: true,
  },
  {
    name: "Notes",
    path: "/notes",
    active: false,
  },
  {
    name: "Contact",
    path: "/contact",
    active: true,
  },
];

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
  const activeNavItems = navItems.filter((item) => item.active);

  return (
    <Root>
      <List>
        {activeNavItems.map(({ name, path }) => (
          <ListItem key={path}>
            <NavLink to={path}>
              {({ isActive }) => (
                <NavLinkContent isActive={isActive} to={name} />
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Root>
  );
};
