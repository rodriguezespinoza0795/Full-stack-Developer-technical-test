import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import MuiAutoComplete from "../../components/AutoComplete";
import MuiTextField from "../../components/TextField";
import MuiDatePicker from "../../components/DatePicker";
import { getCatalogues } from "../../graphql/form.graphql"
import { useQuery } from '@apollo/client';


export default function App() {
    const { handleSubmit, control } = useForm();
    const { loading, data } = useQuery(getCatalogues)

    const onSubmit = (data: any) => {
        console.log('data', data)
    }

    return (
        !loading && (
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', padding: '3rem' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="end"
                    alignItems="flex-end"
                    gap={1}
                    style={{ marginBottom: '1.875rem' }}
                >
                    <Button variant="contained" type="submit">submit</Button>
                </Grid>
                <Grid container>
                    <Typography variant="h5" fontWeight='bold'>
                        Datos Generales
                    </Typography>
                </Grid>
                <Grid
                    container
                    marginTop={3}
                    spacing={3}
                >
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <MuiTextField control={control} name="businessName" label="Razón social" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <MuiTextField control={control} name="tradename" label="Nombre comercial" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <MuiAutoComplete control={control} options={data.industries} name="idIndustry" label="Industria" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <MuiAutoComplete control={control} options={data.regimens} name="idRegime" label="Régimen Fiscal" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <MuiDatePicker control={control} name="date" label="Date" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <MuiAutoComplete control={control} options={data.industries} name="idIndustry" label="Industria" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <MuiAutoComplete control={control} options={data.industries} name="idIndustry" label="Industria" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <MuiAutoComplete control={control} options={data.industries} name="idIndustry" label="Industria" />
                    </Grid>
                </Grid>
            </form >
        )
    );
}