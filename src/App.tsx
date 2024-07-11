import "./App.css";
import { ThemeProvider, colors, createTheme } from "@mui/material";

import MuiTheme from "./components/MuiTheme";
import MuiResponsiveness from "./components/MuiResponsiveness";
// import MuiResponsiveness from "./components/MuiResponsiveness";
// import MuiMasonry from "./components/MuiMasonry";
// import MuiTimeline from "./components/MuiTimeline";
// import MuiTabs from "./components/MuiTabs";
// import { LocalizationProvider } from "@mui/lab";
// import AdaptorDateFns from "@mui/lab/AdapterDateFns";
// import MuiLoadingButton from "./components/MuiLoadingButton";
// import MuiSkeleton from "./components/MuiSkeleton";
// import MuiProgress from "./components/MuiProgress";
// import MuiDialoge from "./components/MuiDialoge";
// import MuiSnackbar from "./components/MuiSnackbar";
// import MuiAlert from "./components/MuiAlert";
// import MuiTable from "./components/MuiTable";
// import MuiToolTip from "./components/MuiToolTip";
// import MuiChip from "./components/MuiChip";
// import MuiList from "./components/MuiList";
// import MuiBadge from "./components/MuiBadge";
// import MuiAvatar from "./components/MuiAvatar";
// import MuiBottomNav from "./components/MuiBottomNav";
// import MuiSpeedDial from "./components/MuiSpeedDial";
// import MuiBreadCrumbs from "./components/MuiBreadCrumbs";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiMenu from "./components/MuiMenu";
// import MuiLink from "./components/MuiLink";
// import MuiNavBar from "./components/MuiNavBar";
// import MuiImageList from "./components/MuiImageList";
// import MuiAccordion from "./components/MuiAccordion";
// import MuiCard from "./components/MuiCard";
// import MuiPaper from "./components/MuiPaper";
// import MuiGrid from "./components/MuiGrid";
// import MuiStack from "./components/MuiStack";
// import MuiBox from "./components/MuiBox";
// import MuiAutoComplete from "./components/MuiAutoComplete";
// import MuiRating from "./components/MuiRating";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiCheckbox from "./components/MuiCheckbox";
// import MuiRadio from "./components/MuiRadio";
// import MuiSelect from "./components/MuiSelect";
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";
// import MuiTextField from "./components/MuiTextField";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <LocalizationProvider dateAdapter={AdaptorDateFns}> */}
        {/* <MuiButton /> */}
        {/* <MuiTypography /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadio /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiBox /> */}
        {/* <MuiStack /> */}
        {/* <MuiGrid /> */}
        {/* <MuiPaper /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavBar /> */}
        {/* <MuiLink /> */}
        {/* <MuiMenu /> */}
        {/* <MuiBreadCrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNav /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiToolTip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialoge /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* </LocalizationProvider> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeline /> */}
        {/* <MuiMasonry /> */}
        <MuiResponsiveness />
        <MuiTheme />
      </div>
    </ThemeProvider>
  );
}

export default App;
