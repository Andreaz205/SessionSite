const fs = require('fs')

export interface ISubmitApplication {
    phone: string,
    city: string,
    name: string
}

export interface ISubmitApplicationData extends ISubmitApplication {
    date: Date
}

const handleSubmitApplication = async (contacts: ISubmitApplication, questions: any) => {
    console.log(process.cwd())
    const data = JSON.stringify({...contacts, questions: questions, date: Date})
    await fetch('/api/save-application', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data
    })
}

export const events = { handleSubmitApplication };