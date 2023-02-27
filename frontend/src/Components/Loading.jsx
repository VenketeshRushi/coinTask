import { Box, Image } from "@chakra-ui/react";
import React from "react";

function Loading() {
  return (
    <Box>
      <Image
        height="620px"
        width="100%"
        m="auto"
        src="https://cdn.dribbble.com/users/90627/screenshots/1096260/loading.gif"
        alt="loadingGifLink"
      />
    </Box>
  );
}

export default Loading;
