import { Injectable } from '@angular/core';

export let SIDE_EFFECT_ON_INIT = false;

@Injectable()
export class LazyService {

  constructor() {
    console.log(`LazyService initialized!`);
    SIDE_EFFECT_ON_INIT = true;
  }

}
