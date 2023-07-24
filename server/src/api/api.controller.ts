import { Controller, Get, Post, Put, Body, Param, Query } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Get()
    getAll(): string {
        return 'GET request';
    }
 
    @Get('search')
    searchUsers(@Query() queryParams): string {
        console.log(queryParams);

        return `GET request with query parameter: query=${JSON.stringify(queryParams)}`;
    }
    @Post("create")
    create(@Body() data: any): any {
        
        // console.log("dddddkkkddddddd");
        console.log(`${JSON.stringify(data)}`)

       return `POST request with data: ${JSON.stringify(data)}`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: any): string {
        return `PUT request for ID ${id} with data: ${JSON.stringify(data)}`;
    }
    @Get(':id')
    getById(@Param('id') id: string): string {
        return `GET request fo ID ${id}`;
    }
}
