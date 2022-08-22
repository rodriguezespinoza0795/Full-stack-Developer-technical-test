import React from 'react'
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const MuiTextField = ({ control, name, label }: { control: any, name: string, label: string }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => <TextField fullWidth {...field} label={label} />}
        />
    )
}


export default MuiTextField