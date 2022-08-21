import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import { Autocomplete, TextField, Box } from '@mui/material';
import countries from "./countries";

const AutocompleteComponent = ({ control }: { control: Control }) => {
    return (
        <Controller
            render={({ field }) => (
                <Autocomplete
                    {...field}
                    options={countries}
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => {
                        return (
                            <Box>
                                <Box>
                                    {option.code}
                                    <br />
                                    {option.label}
                                    /
                                    {option.phone}
                                </Box>
                            </Box>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a country"
                            variant="outlined"
                        />
                    )}
                    isOptionEqualToValue={(option, value) =>
                        value === undefined || value === "" || option.id === value.id
                    }
                    onChange={(_, data) => field.onChange(data)}
                />
            )}
            name="country"
            control={control}
        />
    );
};

export default AutocompleteComponent;