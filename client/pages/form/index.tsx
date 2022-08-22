import React from 'react'
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import AutocompleteComponent from '../../components/Autocomplete'
import { Button } from '@mui/material';
import { getUsers } from '../../graphql/form.graphql'
import { useQuery } from '@apollo/client';

const onSubmit: SubmitHandler<any> = (data) => {
    console.log('data', data)
}

const Form = () => {
    const { loading, data } = useQuery(getUsers)
    console.log(loading, data)
    const { handleSubmit, control } = useForm<any>({
        defaultValues: { country: { code: "", label: "", phone: "" } }
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <AutocompleteComponent control={control} />
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}

export default Form