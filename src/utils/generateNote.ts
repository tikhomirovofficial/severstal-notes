import { Note } from "../types/entities";
import { getNormalizedDate } from "./getNormalizedDate";

export const generateNote = (): Note => {
    const date = new Date();
    const normalizedDate = getNormalizedDate(date)

    return {
        id: Date.now().toString(),
        name: "Untitled",
        created_date: normalizedDate,
        updated_date: normalizedDate,
        content: ""
    }
}