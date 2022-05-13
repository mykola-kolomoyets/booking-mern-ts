import { format } from "date-fns";

export const formatDate = (date: Date) => format(date, "MM/dd/yyyy");

export type BookingOptions = {
    adults: number;
    children: number;
    rooms: number;
};  

export const isPlural = (value: number) => value > 1;

export const capitalize = (value: string) => `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;