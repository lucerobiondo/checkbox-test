import { styled, Box } from "@mui/material";


export const CustomCointainer = styled(Box)({
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    boxSizing: "border-box",
});

export const CheckboxContainer = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: "10px"
});
