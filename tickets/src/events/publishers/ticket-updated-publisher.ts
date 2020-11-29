import { Publisher, Subjects, TicketUpdatedEvent } from '@zhuoming/common';

export class TicketUpdateddPublisher extends Publisher<TicketUpdatedEvent>{

    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
    
}