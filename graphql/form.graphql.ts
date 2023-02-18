import { gql } from '@apollo/client';

const getCatalogues = gql`
    query Query {
        industries {
            value: id
            label: name
        },
        regimens {
            value: id
            label: name
        },
        nationalities {
            value: id
            label: name
        },
        banks {
            value: id
            label: name
        }
        cities {
            value: id
            label: name
        },
        states {
            value: id
            label: name
        },
        countries {
            value: id
            label: name
        },
        genders {
            value: id
            label: name
        },
        maritalStatus {
            value: id
            label: name
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

export { getCatalogues, createformAnswer }