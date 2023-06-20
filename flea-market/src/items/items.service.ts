import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
    private itmes: Item[] = [];


    findAll(): Item[] {
        return this.itmes;
    }


    findById(id: string): Item {
        return this.itmes.find(item => item.id === id);
    }


    create(createItemDto: CreateItemDto): Item {
        const item: Item = {
           id: uuid(),
           ...createItemDto,
           status: ItemStatus.ON_SALE,    
        }
        this.itmes.push(item);
        return item;
    }

    updateStatus(id: string): Item {
        const item = this.findById(id);
        item.status = ItemStatus.SOLD_OUT;
        return item;
    }


    delete(id: string): void {
        this.itmes = this.itmes.filter(item => item.id !== id);
    }


    
}
