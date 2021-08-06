import { Publisher, Subjects, TicketUpdatedEvent } from "@jhoncs325org/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}