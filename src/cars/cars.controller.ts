import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
//@UsePipes( ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService:CarsService
        ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getById(@Param('id',new ParseUUIDPipe({version: '5'})) id:string){
        return this.carsService.findById(id);
    }

    @Post()
    createCar(@Body() creaeteCarDto: CreateCarDto ){
        return this.carsService.create(creaeteCarDto);


    }

    @Patch(':id')
    updateCar(@Body() body: any, @Param('id') id:string){
        return body;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id:number){
        return id;
    }
}
