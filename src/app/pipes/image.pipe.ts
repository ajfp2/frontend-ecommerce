import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'image',
    standalone: false
})
export class ImagePipe implements PipeTransform {
    transform(imageUrl: string): string {
        if (!imageUrl){
            return 'images/articles/default.jpg';
        } else return imageUrl;
    }
}
