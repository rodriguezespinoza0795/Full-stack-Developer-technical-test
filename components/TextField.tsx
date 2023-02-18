import React from 'react'
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { has } from 'lodash';

const MuiTextField = ({ control, name, label, required, rules, errors, type = "text" }: { control: any, name: string, label: string, required: boolean, rules?: any, errors?: any, type?: string }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: {
                value: required,
                message: 'Campo requerido',
              },
              validate: (value) => RegExp(rules)?.test(value) || 'Campo inválido'
            }}
            render={({ field: { onChange } }) => {
                return (
                    <TextField
                        onChange={(event) => onChange(type === "number" && !['clabe', "phone", "phonePerson"].includes(name) ? Number(event.target.value) : event.target.value)}
                        error={has(errors,name)}
                        fullWidth
                        type={type}
                        label={label}
                        helperText={errors?.[name]?.message} />
                )
            }}
        />
    )
}


export default MuiTextField