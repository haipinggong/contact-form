import { ContactForm } from "./components/ContactForm/ContactForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styles } from "./App.styles";

function App() {
  return (
    <Box sx={styles.container}>
      <Typography variant="h1">Contact Us</Typography>
      <ContactForm />
    </Box>
  );
}

export default App;
