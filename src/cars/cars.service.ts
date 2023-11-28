import { BadRequestException, Injectable, NotFoundException, Delete } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
   
    ];

    findAll(){
        return this.cars;
    }

    findById(id:string){
        let car = this.cars.find( car => car.id === id) ;

        if(!car) throw new NotFoundException(`Car with id '${id}' not found`)
        
        return car ;
    }

    create( createCarDto: CreateCarDto ){
        const car: Car = {
            id: uuid(),
            ...createCarDto
            // brand: createCarDto.brand,
            // model: createCarDto.model

        }
        this.cars.push(car);

        return car;

    }

    update(id: string ,updateCarDto: UpdateCarDto)   {
        let carDB = this.findById(id);

        if(updateCarDto.id && updateCarDto.id !== id){
            throw new BadRequestException(`Car id is not valid in body`);
        }


        this.cars = this.cars.map( car => {
            if(car.id === id){
                carDB  = {...carDB,...updateCarDto,id,
                } 
                return carDB;
            }
            return car;
            
        })

        return carDB;

    } 

    delete(id: string){
        const car = this.findById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        //return; //undefined

    }

    fillCarsWithSeedData(cars : Car[]){
        this.cars = cars;
    }
}
