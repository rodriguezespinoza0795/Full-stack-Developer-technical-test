import React from 'react'
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { has } from 'lodash';

const MuiAutoComplete = ({ control, options, name, label, required, errors }: { control: any, options: any, name: string, label: string, required: boolean, errors?: any }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: {
                value: required,
                message: 'Campo requerido',
              }}}
            render={({ field: { onChange, value } }) => (
                <Autocomplete
                    value={value}
                    onChange={(event, item) => {
                        onChange(item.value);
                    }}
                    options={options}
                    renderInput={(params: any) => <TextField {...params} label={label} error={has(errors,name)} helperText={errors?.[name]?.message}/>}
                />
            )
            }
        />
    )
}


export default MuiAutoComplete