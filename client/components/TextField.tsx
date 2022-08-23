import React from 'react'
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const MuiTextField = ({ control, name, label, required, rules, errors, helperText, type = "text" }: { control: any, name: string, label: string, required: boolean, rules?: any, errors?: any, helperText?: string, type?: string }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange } }) => {
                return (
                    <TextField
                        onChange={(event) => onChange(type === "number" && !['clabe', "phone", "phonePerson"].includes(name) ? Number(event.target.value) : event.target.value)}
                        error={errors?.[name]}
                        fullWidth
                        type={type}
                        label={label}
                        required={required}
                        helperText={helperText} />
                )
            }}
        />
    )
}


export default MuiTextField