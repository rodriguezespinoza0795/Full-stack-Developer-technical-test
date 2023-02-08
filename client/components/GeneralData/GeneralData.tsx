import React from 'react'
import { Grid, Typography } from "@mui/material";
import MuiTextField from "../TextField";
import MuiAutoComplete from "../AutoComplete";
import MuiDatePicker from "../DatePicker";
import { GeneralDataProps } from './GeneralData.types';

const GeneralData = (
    { 
        control,
        errors,
        data 
    }: GeneralDataProps) => {
    return (
        <>
            <Grid container>
            <Typography 
                variant="h5" 
                fontWeight='bold'
            >
                Datos Generales
            </Typography>
            </Grid>
            <Grid
                container
                marginTop={3}
                marginBottom={3}
                spacing={3}
            >
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiTextField
                        control={control}
                        name="businessName"
                        label="Razón social"
                        required={true}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiTextField
                        control={control}
                        name="tradename"
                        label="Nombre comercial"
                        required={true}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiAutoComplete
                        control={control}
                        options={data.industries}
                        name="idIndustry"
                        label="Industria"
                        required={true}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiAutoComplete
                        control={control}
                        options={data.regimens}
                        name="idRegime"
                        label="Régimen Fiscal"
                        required={true}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiDatePicker
                        control={control}
                        name="constitutionDate"
                        label="Fecha de constitución"
                        required={true}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiTextField
                        control={control}
                        name="rfc"
                        label="RFC"
                        required={true}
                        rules={/^\d{12}$/}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiAutoComplete
                        control={control}
                        options={data.nationalities}
                        name="idNationality"
                        label="Nacionalidad"
                        required={true}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiTextField
                        control={control}
                        name="phone"
                        label="Número telefónico"
                        required={true}
                        rules={/^\d{10}$/}
                        errors={errors}
                        type="number"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <MuiTextField
                        control={control}
                        name="mail"
                        label="Correo electrónico"
                        required={true}
                        errors={errors}
                        rules={'[a-z0-9]+@[a-z]+\.[a-z]{2,3}'}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default GeneralData;