import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1024,
      xl: 1920,
    },
  },
});

export default theme