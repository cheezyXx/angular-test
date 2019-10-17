import {Injectable} from '@angular/core';

import {TitleService} from '../../../services/title.service';

@Injectable()
export class BetterTitleService extends TitleService {
  getTitle(): string {
    return `${super.getTitle()} What? This is better title`;
  }
}
