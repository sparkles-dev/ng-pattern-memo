import { Injectable } from '@angular/core';

export let SIDE_EFFECT_ON_INIT = false;

@Injectable()
export class EagerService {

  constructor() {
    console.log(`EagerService initialized!`);
    SIDE_EFFECT_ON_INIT = true;
  }

}
