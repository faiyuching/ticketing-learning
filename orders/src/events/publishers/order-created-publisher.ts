import { Publisher, OrderCreatedEvent, Subjects } from '@zhuoming/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}