import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ptBrLocale from "date-fns/locale/pt-BR";
import { StyledDatePicker } from "./styles";
import { TextField } from "@mui/material";

type Props = {
  setFilter: React.Dispatch<
    React.SetStateAction<{
      search: string;
      minPrice: number | null | undefined;
      maxPrice: number | null | undefined;
      dateInclusion: string | number | Date | null | undefined;
    }>
  >;

  filter: {
    search: string;
    minPrice: number | null | undefined;
    maxPrice: number | null | undefined;
    dateInclusion: string | number | Date | null | undefined;
}
};

export const DateFilter = ({ filter, setFilter }: Props) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={ptBrLocale}
    >
      <StyledDatePicker
        mask={"__/__/____"}
        openTo="day"
        views={["year", "month", "day"]}
        value={filter.dateInclusion}
        onChange={(newValue: unknown) => {
            setFilter((prevFilters) => ({
                ...prevFilters!,
                dateInclusion: newValue as string | number | Date | null | undefined
            }))
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        renderInput={(params: any) => (
          <TextField
            {...params}
            sx={{
              width: "100%",
              minWidth: "133px",
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
