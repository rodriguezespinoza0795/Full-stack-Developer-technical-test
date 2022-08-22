import React from 'react'
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

const MuiAutoComplete = ({ control, options, name, label }: { control: any, options: any, name: string, label: string }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <Autocomplete
                    value={value}
                    onChange={(event, item) => {
                        onChange(item);
                    }}
                    options={options}
                    renderInput={(params: any) => <TextField {...params} label={label} />}
                />
            )
            }
        />
    )
}


export default MuiAutoComplete