import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import catPic from "../../images/banner/cat.png";

function Banner() {
  const theme = useTheme();
  const breakpointsDownSm = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Card
        sx={{
          marginTop: "7rem",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: breakpointsDownSm ? "wrap" : "nowrap",
        }}
      >
        <CardMedia
          component="img"
          image={catPic}
          alt="cat banner"
          sx={{ width: "38vw" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", margin: "0 8vw" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Our motto
            </Typography>
            <Typography variant="h3" component="div">
              Help animals
            </Typography>
            <Typography variant="h7" component="div">
              The demand for our services increases every month. Your generous
              financial contributions helps us to donate directly to the rescues
              with much needed food, & critical pet supplies. It is necessary to
              increase the amount of supporters to continue our life-saving
              work. The Need Never Stops and Neither Do We!
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" sx={{ width: "100%", height: "60px" }}>
              Donate
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}

export default Banner;
