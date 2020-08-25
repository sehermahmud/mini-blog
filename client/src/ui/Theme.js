import { createMuiTheme } from "@material-ui/core/styles";

const arcRedPink = "#ff66a3";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#ff4400",
    },
    secondary: {
      light: "#0066ff",
      main: arcRedPink,
      contrastText: "#ffcc00",
    },
	},
	typography: {
    h1: {
      fontFamily: "Kalam",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcRedPink,
      lineHeight: 1.5,
    },
	},
	overrides: {
		MuiInputLabel: {
			root: {
				color: "#ff66a3",
				fontSize: "1rem",
			},
		},
		MuiInput: {
			root: {
				color: "#ff66a3",
				fontWeight: 300,
			},
			underline: {
				"&:before": {
					borderBottom: `2px solid ${"#ff66a3"}`,
				},
				"&:hover:not($disabled):not($focused):not($error):before": {
					borderBottom: `2px solid ${"#ff66a3"}`,
				},
			},
		},
},
});
