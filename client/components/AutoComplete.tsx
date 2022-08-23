import React from 'react'
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

const MuiAutoComplete = ({ control, options, name, label, required }: { control: any, options: any, name: string, label: string, required: boolean }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <Autocomplete
                    value={value}
                    onChange={(event, item) => {
                        onChange(item.value);
                    }}
                    options={options}
                    renderInput={(params: any) => <TextField {...params} label={label} required={required} />}
                />
            )
            }
        />
    )
}


export default MuiAutoComplete