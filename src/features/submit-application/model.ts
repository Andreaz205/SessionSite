import {IQuestion, storeApplicationRequest} from "@/src/shared/api/requests";

const fs = require('fs')

export interface ISubmitApplicationContacts {
    phone: string,
    city: string,
    name: string
}

const handleSubmitApplication = async (contacts: ISubmitApplicationContacts, questions: IQuestion[]) => {
    const date = (new Date()).toDateString()

    return storeApplicationRequest({ contacts: contacts, questions: questions, date: date })
}

export const events = { handleSubmitApplication };