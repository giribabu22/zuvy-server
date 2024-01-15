import { Module } from '@nestjs/common';
import { BatchesController } from './batch.controller';
import { BatchesService } from './batch.service';
@Module({
    controllers: [BatchesController],
    providers: [BatchesService],
    exports: [BatchesService], // Export BatchesService
})
export class BatchesModule {
    
}
