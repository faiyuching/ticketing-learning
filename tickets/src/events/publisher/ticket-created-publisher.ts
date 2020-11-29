import { Publisher, Subjects, TicketCreatedEvent } from '@zhuoming/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{

    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    
}