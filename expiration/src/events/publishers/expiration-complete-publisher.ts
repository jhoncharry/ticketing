import { Subjects, Publisher, ExpirationCompleteEvent } from '@jhoncs325org/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}