import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from '../database/entities/booking.entity';
import { Turf } from '../database/entities/turf.entity';
import { Payment } from '../database/entities/payment.entity';
import { Payout } from '../database/entities/payout.entity';
import { User } from '../database/entities/user.entity';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
    imports: [TypeOrmModule.forFeature([Turf, Booking, Payment, Payout, User])],
    controllers: [DashboardController],
    providers: [DashboardService],
    exports: [DashboardService],
})
export class DashboardModule { }
