import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
    private itmes: Item[] = [];


    findAll(): Item[] {
        return this.itmes;
    }


    findById(id: string): Item {
        return this.itmes.find(item => item.id === id);
    }


    create(item: Item): Item {
        this.itmes.push(item);
        return item;
    }


    
}
