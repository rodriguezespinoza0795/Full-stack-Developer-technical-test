import React from 'react'
import { Grid, Typography } from "@mui/material";
import MuiTextField from "../TextField";
import MuiAutoComplete from "../AutoComplete";
import { BankAccountProps } from './BankAccount.types';

const BankAccount = (
    { 
        control,
        errors,
        data 
    }: BankAccountProps) => {
    return (
        <>
            <Grid container>
                <Typography variant="h5" fontWeight='bold'>
                    Cuenta Bancaria
                </Typography>
            </Grid>
            <Grid
                container
                marginTop={3}
                marginBottom={3}
                spacing={3}
            >
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiAutoComplete
                        control={control}
                        options={data.banks}
                        name="idBank"
                        label="Banco"
                        required={true}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiTextField
                        control={control}
                        name="clabe"
                        label="CLABE"
                        required={true}
                        rules={/^\d{18}$/}
                        errors={errors}
                        type="number"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default BankAccount;