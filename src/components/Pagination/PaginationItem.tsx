import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
  isCurrent?: boolean;
  page: number;
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
  isCurrent = false,
  page,
}) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bgColor: "gray.500" }}
    >
      {page}
    </Button>
  );
};
