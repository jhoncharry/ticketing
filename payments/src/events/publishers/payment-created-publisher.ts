import { Publisher, PaymentCreatedEvent, Subjects } from "@jhoncs325org/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}