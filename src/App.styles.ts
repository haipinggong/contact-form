import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    width: "736px",
    margin: "128px auto",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "16px",
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
  }),
};
