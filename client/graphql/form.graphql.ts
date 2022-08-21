import { useQuery, gql } from '@apollo/client';

const GerUsers = gql`
    query Query {
    users {
        id
        email
        password
        createdAt
    }
    }
`

export { GerUsers }