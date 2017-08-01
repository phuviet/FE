import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'image'
})

export class DefaultImageAvatarDirective implements PipeTransform {

  transform(src: string) {
    if(!src) {
      var defaultImg = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png';
      return defaultImg;
    }
    else {
      return src;
    }
  }
}