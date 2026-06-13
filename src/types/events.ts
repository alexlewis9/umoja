export type EventStatus = "upcoming" | "ongoing" | "past";

export type EventItem = {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  status: EventStatus;
  registrationUrl?: string;
};