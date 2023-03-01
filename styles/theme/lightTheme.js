import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const archBlue = '#0B72B9';
const archOrange = '#FFBA60';

const lightTheme = createTheme({
  palette: {
    common:{
      blue:`${archBlue}`,
      orange:`${archOrange}`
    },
    primary: {
       main: `${archBlue}`,
    },
    secondary: {
      main: `${archOrange}`,
    },
    error: {
    main: red.A400,
    },
   },
});

export default lightTheme;