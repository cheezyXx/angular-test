import {Injectable} from '@angular/core';

import {ITitleService} from './ITitleService';

@Injectable()
export class TitleService implements ITitleService {

  somethingVeryCool() {
    return 'Wow this is so cool';
  }

  getTitle() {
    return 'General title';
  }
}
