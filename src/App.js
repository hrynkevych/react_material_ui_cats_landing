import { ThemeProvider, useMediaQuery } from "@mui/material"
import Banner from "./components/Banner/Banner.js"
import Header from "./components/Header/Header.js"
import theme from './styles'
import MasonryImageList from './components/ImageContent/ImageContent.js'
import FooterEx from './components/Footer/Footer.js' 
import ActionIconsMobile from "./components/ActionIconsMobile/ActionIconsMobile.js"

function App() {
    const breakpointsDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <MasonryImageList />
        {breakpointsDownMd && <ActionIconsMobile />}
        <FooterEx />
      </ThemeProvider>
    </>
  )
}

export default App;
