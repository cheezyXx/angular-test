import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpecialTitleService {

  getSuperTitle() {
    return 'General super title';
  }
}
