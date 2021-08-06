import { Publisher, Subjects, TicketCreatedEvent } from "@jhoncs325org/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
}