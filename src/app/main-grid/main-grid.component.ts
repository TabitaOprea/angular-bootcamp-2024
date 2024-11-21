import { Component } from '@angular/core';

@Component({
selector: 'app-main-grid',
templateUrl: './main-grid.component.html',
styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent {
dogs = [
{
name: 'Shiba Inu',
size: 'Small',
image: 'shiba.jpeg',
description: 'A small, agile dog from Japan.'
},
{
name: 'Carpathian Shepherd Dog',
size: 'Big',
image: 'carpathian.jpeg',
description: 'Historically used by Romanian farmers.'
},{
name: 'Dachshund Shepherd Dog',
size: 'Big',
image: 'dachshund.jpeg',
description: 'Info about dachshund dogs.'
},{
name: 'Carpathian Shepherd Dog',
size: 'Big',
image: 'carpathian.jpeg',
description: 'Historically used by Romanian farmers.'
}
];

onDogLiked(dogName: string) {
    window.alert(`${dogName} was liked!`);
  }
}
