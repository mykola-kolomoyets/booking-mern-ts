import { format } from "date-fns";

export const formatDate = (date: Date) => format(date, "MM/dd/yyyy");

export type BookingOptions = {
    adults: number;
    children: number;
    rooms: number;
};  

export const isPlural = (value: number) => value > 1;