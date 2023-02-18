import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { has } from "lodash";
import { isValid } from "date-fns";

const MuiDatePicker = ({
  control,
  name,
  label,
  required,
  errors,
}: {
  control: any;
  name: string;
  label: string;
  required: boolean;
  errors?: any;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        rules={{
          required: {
            value: required,
            message: "Campo requerido",
          },
          validate: (value) => isValid(value) || "Fecha inválida",
        }}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label={label}
            value={value}
            onChange={(value: any) => {
              onChange(value);
            }}
            renderInput={(params: any) => (
              <TextField
                fullWidth
                {...params}
                error={has(errors, name)}
                helperText={errors?.[name]?.message}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MuiDatePicker;
