import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
} from "./gridTemplate";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

type Props = {};

const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width : 1200px )");
  const { palette } = useTheme();

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridTemplateColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
