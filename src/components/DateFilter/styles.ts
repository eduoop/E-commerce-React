import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePicker = styled(DatePicker)`
  background-color: white;
  border-radius: 4px;
  border: none !important;
  box-shadow: none !important;

  input {
    color: #98a0a2;
    text-align: center;
    width: 100%;
    /* Subtitle/02 */
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.1px;
    padding: 8px 10px;
    padding-right: 0;

    &::placeholder {
      font-size: 16px;
      color: #98a0a2 !important;
      opacity: 1;
    }
  }

  label {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 171.875% */
  }

  .css-1sumxir-MuiFormLabel- root-MuiInputLabel-root.Mui- focused {
    color: red
  }

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    -webkit-transform: translate(14px, 7px) scale(1);
  }

  .MuiFormLabel-root.Mui-focused {
    color: rgb(0, 96, 177) !important;

  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgb(0, 96, 177) !important;
  }
`;
