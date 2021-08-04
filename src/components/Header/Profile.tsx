import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData: boolean;
}

export const Profile: React.FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mateus Alcantara</Text>
          <Text color="gray.300" fontSize="small">
            mateuscastro.al@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Mateus Alcantara"
        src="https://avatars.githubusercontent.com/u/50282873?v=4"
      />
    </Flex>
  );
};
