import * as user from './user.resolver';
import * as industry from './industry.resolver';
import * as regime from './regime.resolver';
import * as nationality from './nationality.resolver';
import * as bank from './bank.resolver';
import * as city from './city.resolver';
import * as state from './state.resolver';
import * as country from './country.resolver';
import * as gender from './gender.resolver';
import * as maritalStatus from './maritalStatus.resolver';
import * as formAnswer from './formAnswer.resolver';

export default {
    Query: {
        users: user.findAll,
        industries: industry.findAll,
        regimens: regime.findAll,
        nationalities: nationality.findAll,
        banks: bank.findAll,
        cities: city.findAll,
        states: state.findAll,
        countries: country.findAll,
        genders: gender.findAll,
        maritalStatus: maritalStatus.findAll,
        formAnswers: formAnswer.findAll
    },
    Mutation: {
        createFormAnswer: formAnswer.create,
    },

};