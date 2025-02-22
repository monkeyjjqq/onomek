import React from "react";
import { Button, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowForwardIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate which page numbers to show
  const pagesToShow = useBreakpointValue({
    base: 5, // Show 5 page buttons on small screens
    sm: 7, // Show 7 page buttons on medium screens
    md: 10, // Show 10 page buttons on larger screens
  });

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const start = Math.max(1, currentPage - Math.floor(pagesToShow! / 2));
    const end = Math.min(totalPages, start + pagesToShow! - 1);
    return Array.from({ length: totalPages }, (_, i) => i + 1).slice(
      start - 1,
      end
    );
  };

  // Conditionally render button labels or icons
  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
  });

  return (
    <Flex justify="center" align="center" mt={4} wrap="wrap">
      {/* First Button */}
      {isSmallScreen ? (
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="First"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          variant="outline"
          mr={2}
        />
      ) : (
        <Button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          variant="outline"
          mr={2}
        >
          First
        </Button>
      )}

      {/* Prev Button */}
      {isSmallScreen ? (
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isPrevDisabled}
          variant="outline"
          mr={2}
        />
      ) : (
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isPrevDisabled}
          variant="outline"
          mr={2}
        >
          Prev
        </Button>
      )}

      {/* Page Numbers */}
      <Flex wrap="wrap" justify="center">
        {getPageNumbers().map((page) => (
          <Button
            key={page}
            onClick={() => handlePageChange(page)}
            variant={currentPage === page ? "solid" : "outline"}
            colorScheme={currentPage === page ? "blue" : "gray"}
            mx={1}
            size={["sm", "md"]}
          >
            {page}
          </Button>
        ))}
      </Flex>

      {/* Next Button */}
      {isSmallScreen ? (
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isNextDisabled}
          variant="outline"
          ml={2}
        />
      ) : (
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isNextDisabled}
          variant="outline"
          ml={2}
        >
          Next
        </Button>
      )}

      {/* Last Button */}
      {isSmallScreen ? (
        <IconButton
          icon={<ArrowForwardIcon />}
          aria-label="Last"
          onClick={() => handlePageChange(totalPages)}
          disabled={isNextDisabled}
          variant="outline"
          ml={2}
        />
      ) : (
        <Button
          onClick={() => handlePageChange(totalPages)}
          disabled={isNextDisabled}
          variant="outline"
          ml={2}
        >
          Last
        </Button>
      )}
    </Flex>
  );
};

export default Pagination;
