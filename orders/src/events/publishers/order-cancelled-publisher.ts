import { OrderCancelledEvent, Publisher, Subjects } from "@jhoncs325org/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}