import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
  shaft_opacity: "rgba(0, 0, 0, 0.7)",
  dark_footer: "#2c3333"
};

// TODO: define overrides object to create theme
const overrides = { 
  palette: {},
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.primary,
          height: 'auto'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.body_bg,
          borderRadius: '0',
          boxShadow: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          fontWeight: '600'
        }
      }
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: Colors.shaft_opacity
          }
        }
      }
    }
  }
};

const getNewPalette = (colors) => {
  for (const property in colors)
  overrides.palette[property] = { 'main': colors[property] };
}

getNewPalette(Colors);

// TODO: use overrides object to create theme
const theme = createTheme(overrides);

export { overrides };
export default theme;
