import { useQuery, gql } from '@apollo/client';

const getUsers = gql`
    query Query {
        industries {
            id
            name
        },
        regimens {
            id
            name
        },
        nationalities {
            id
            name
        },
        banks {
            id
            name
        }
        cities {
            id
            name
        },
        states {
            id
            name
        },
        countries {
            id
            name
        },
        genders {
            id
            name
        },
        maritalStatus {
            id
            name
        }
    }
`

const createformAnswer = gql`
mutation Mutation($data: createformAnswer) {
    createFormAnswer(data: $data) {
      id
      businessName
      tradename
      idIndustry
      idRegime
      constitutionDate
      rfc
      idNationality
      phone
      mail
      clabe
      idBank
      street
      intNumber
      extNumber
      cp
      colony
      idCity
      idState
      idCountry
      proofResidencyURL
      namePerson
      idGender
      birthday
      idBirthState
      idBirthCountry
      idNationalityPerson
      curpPerson
      rfcPerson
      address
      idMaritalStatus
      phonePerson
      mailPerson
      identificationURL
      createdAt
    }
  }
`

export { getUsers, createformAnswer }