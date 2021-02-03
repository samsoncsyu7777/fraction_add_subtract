import { colors, createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 30,
    h1: {
      // could customize the h1 variant as well
    }
  },
  palette: {
    //primary: { main: "#FF0000" },
    //secondary: { main: "#0055FF"},
  },
  color: {
    myBlack: "#111111",
    myRed: "#AA0000",
    myBlue: "#0044AA",
    myGreen: "#00BB00",
    myOrange: "#DD8800",
    myYellow: "#FFDF44",
    myBrown: "#BB6611",
    myPink: "#FFAAAA",
    myPurple: "#AA00FF",
    myMagenta: "#FF00FF",
    myDarkGreen: "#774400",
    myWhite: "#F5FFE8",
    red: "#FF4444",
    orange: "#FF8400",
    yellow: "#F0E900",
    lime: "#B0FF33",
    green: "#55FF77",
    cyan: "#22EEFF",
    blue: "#0088FF",
    purple: "#B400FF",
    skyGradient: "linear-gradient(to top, #A0FF80, #E8FFE8)",
    conicGradient: "linear-gradient(to top right, purple, magenta, red, orange, yellow, orange, red, magenta, purple ) 1",
  },
});
