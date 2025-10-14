import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  textField: {
    width: "100%",
  },
  submitButton: {
    position: "relative",
    "&:hover::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: `rgba(12, 125, 105, 0.5)`,
      pointerEvents: "none",
      borderRadius: "inherit",
    },
  },
};
