import { Injectable } from '@nestjs/common';
import { CARDS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {


  constructor(private readonly carsService:CarsService, private readonly brandsService: BrandsService){

  }


  populatedDB(){
    //CARDS_SEED
    //BRANDS_SEED
    this.carsService.fillCarsWithSeedData(CARDS_SEED);

    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'Seed excuted successfully';
  }
 
}
