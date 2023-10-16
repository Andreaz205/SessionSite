import fs from "fs";
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const contacts = req.body

    const rootDir = process.cwd()
    console.log(rootDir)
    try {
        const today = new Date()
        fs.appendFile(rootDir + '/storage/applications.txt', `${JSON.stringify({...contacts, date: today})}|`, (error) => {
            if (error) {
                console.log(error)
                throw new Error('Ошибка записи')
            }
        })
    } catch (error: any) {
        console.log(error?.message ?? error)
    }
}