import { Stack } from "@chakra-ui/react";
import React from "react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SidebarNav: React.FC = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Contacts
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="#">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="#">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
};
