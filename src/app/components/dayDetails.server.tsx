"use server"
import { get_notes_for_date } from "@/../crud";

export async function useServerData(selectedDate) {
    // fetch data on the server 
    const noteQuery = await get_notes_for_date(selectedDate);
    return { noteQuery }
}