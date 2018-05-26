import { Component, OnInit } from '@angular/core';
//interfaces
import {OptionItem} from '../../models/admin-models';
import {ServiceItem} from '../../models/admin-models';
import {ServiceItems} from '../../models/admin-models';


@Component({
    selector: 'admin',
    styleUrls: ['admin.component.scss'],
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit{
    
    services: ServiceItem[] ;
    constructor(){}
    ngOnInit(){
        console.log('ngOnInit');
       this.services = [
            {
              icon: "../assets/clothing-hanger.svg",
              service: 'Dry Cleaning',
              description: 'any garment',
              minPrice: 4.99,
              maxPrice: 8.99,
              min: null,
              options:[
                {Title: 'Blouse, Choir Robe, Dress, Lining, Pants, Robe ,Scarf, Shirt, Shorts, Skirt, Sweater, Tie, Vest  ', Description: 'test', Price: 5.99},
                {Title: 'Jacket  ', Description: 'test', Price: 6.99},
                {Title: 'Coat, Jumpsuit', Description: 'test', Price: 7.99},
                {Title: 'Down Coat', Description: 'test', Price: 8.99},
                {Title: '2 pieces suit', Description: 'test', Price: 10.99}
              ]
            },
            {
              icon: "../assets/t-shirt-black-silhouette.svg",
              service: 'Laundry',
              description: null,
              minPrice: 3.99,
              maxPrice: 6.99,
              min: null,
              options:[
                {Title: 'Wash & Fold', Description: 'each', Price: 1.59},
                {Title: 'Blouse, Shirt', Description: 'test', Price: 3.99},
                {Title: 'Apron', Description: 'test', Price: 4.99},
                {Title: 'Jeans, Lab Coat, Shorts', Description: 'test', Price: 5.99},
                {Title: 'Jacket, Skirt', Description: 'test', Price: 6.99},
              ]
            },
            // {
            //   icon: "../assets/washing-machine.svg",
            //   service: 'Wash & Fold Laundry',
            //   description: 'per lb',
            //   minPrice: 1.59,
            //   maxPrice: 1.59,
            //   min: null,
            //   options:[
            //     {Title: 'Standard', Description: 'each', Price: 1.59}
            //   ]
            // },
            // {
            //   icon: "../assets/wedding-suit.svg",
            //   service: 'Suits',
            //   description: "includes jacket and pants",
            //   minPrice: 21.99,
            //   maxPrice: 24.99,
            //   min: null,
            //   options:[
            //     {Title: '2 pieces', Description: 'test', Price: 9.99}
            //   ]
            // },
            {
              icon: "../assets/mexico-indian-cloth.svg",
              service: 'Blankets & Others',
              description: null,
              minPrice: 21.99,
              maxPrice: 24.99,
              min: null,
              options:[
                {Title: 'Blanket, Duvet Cover', Description: 'test', Price: 21.99},
                {Title: 'Comforter', Description: 'test', Price: 24.99},
                {Title: 'Rug 3x5 ', Description: 'test', Price: 29.85},
                {Title: 'Leather Boots   ', Description: 'test', Price: 42},
                {Title: 'Rug 4x6', Description: 'test', Price: 47.76},
                {Title: 'Rug 5x8 ', Description: 'test', Price: 79.6},
              ]
            },
            // {
            //   icon: null,
            //   service: 'Blankets',
            //   description: null,
            //   price: 19.99,
            //   min: null
            // },
            // {
            //   icon: "../assets/mexico-indian-cloth.svg",
            //   service: 'Special Services',
            //   description: null,
            //   minPrice: 21.99,
            //   maxPrice: 79.99,
            //   min: null,
            //   options:[
            //     {Title: 'Rug 3x5 ', Description: 'test', Price: 29.85},
            //     {Title: 'Leather Boots   ', Description: 'test', Price: 42},
            //     {Title: 'Rug 4x6', Description: 'test', Price: 47.76},
            //     {Title: 'Rug 5x8 ', Description: 'test', Price: 79.6},
            //   ]
            // },
            // {
            //   icon: "../assets/mexico-indian-cloth.svg",
            //   service: 'Rugs',
            //   description: 'per sq. ft.',
            //   price: 1.50,
            //   min: 19.99
            // },
            // {
            //   icon: "../assets/mexico-indian-cloth.svg",
            //   service: 'Rugs',
            //   description: 'per sq. ft.',
            //   price: 1.50,
            //   min: 19.99
            // },
            // {
            //   icon: "../assets/mexico-indian-cloth.svg",
            //   service: 'Rugs',
            //   description: 'per sq. ft.',
            //   price: 1.50,
            //   min: 19.99
            // }
          ]
    }
}