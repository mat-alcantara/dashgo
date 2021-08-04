import { Flex, Input, Icon, HStack, Box, Text, Avatar } from "@chakra-ui/react";
import { Logo } from "../components/Logo";

import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";

export const Header = () => {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightRadius={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Mateus Alcantara</Text>
            <Text color="gray.300" fontSize="small">
              mateuscastro.al@gmail.com
            </Text>
          </Box>
        </Flex>

        <Avatar
          size="md"
          name="Mateus Alcantara"
          src="https://avatars.githubusercontent.com/u/50282873?v=4"
        />
      </Flex>
    </Flex>
  );
};