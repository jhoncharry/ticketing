import { OrderCreatedEvent, Publisher, Subjects } from "@jhoncs325org/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject: Subjects.OrderCreated = Subjects.OrderCreated;
}