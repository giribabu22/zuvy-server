import { Controller, Get, Post, Put, Delete, Body, Param, ValidationPipe } from '@nestjs/common';
import { BatchesService } from './batch.service';
import { ApiTags, ApiBody, ApiOperation, ApiCookieAuth  } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport'; // Assuming JWT authentication
import { batchData } from './batch.entry';

// swagger body schema for batch
@Controller('batch')
@ApiTags('batch')
export class BatchesController {
    constructor(private batchService: BatchesService) { }
    @Get('/:id')
    @ApiOperation({ summary: "Get the batch by id"})
    getBatchById(@Param('id') id: string): Promise<object> {
        // Logic to fetch and return a batch by ID
        return this.batchService.getBatchById(parseInt(id));
    }

    @Post('/')
    @ApiOperation({ summary: "Create the new batch"})
    @ApiBody(batchData)
    createBatch(@Body() batchData) {
        return this.batchService.createBatch(batchData);
    }

    @Put('/:id')
    @ApiBody(batchData)
    updateBatch(@Param('id') id: string, @Body() batchData) {
        return this.batchService.updateBatch(parseInt(id),batchData);
    }

    @Delete('/:id')
    deleteBatch(@Param('id') id: string) {
        return this.batchService.deleteBatch(parseInt(id));
    }
}