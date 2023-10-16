import {ISubmitApplicationContacts} from "@/src/features/submit-application/model";

export interface IStoreApplicationRequest {
    contacts: ISubmitApplicationContacts,
    questions: IQuestion[],
    date: string | Date
}

export interface IQuestion {
    question: string,
    answer: string
}

export const storeApplicationRequest = async (applicationData: IStoreApplicationRequest): Promise<boolean> => {
    try {
        await fetch('https://text-2-b796b-default-rtdb.firebaseio.com/applications.json', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(applicationData)
        })

        return true
    } catch (e) {
        handleError(e)
        return false
    }
}

export const getApplicationsRequest = async () => {
    try {
        const response = await fetch('https://text-2-b796b-default-rtdb.firebaseio.com/applications.json')

        return await response.json()
    } catch (e) {
        handleError(e)
    }
}

const handleError = (error: any) => {
    console.error(error?.message ?? error)
}