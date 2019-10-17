import {ITitleService} from '../../../services/ITitleService';

export class WhatService implements ITitleService {
  getTitle() {
    return 'what title';
  }

  somethingVeryCool() {
    return 'Cool what';
  }
}
