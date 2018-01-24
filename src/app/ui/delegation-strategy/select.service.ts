import { Injectable } from '@angular/core';

@Injectable()
export class SelectService {

  constructor() { }

  public resolveSelectionStrategy(mode: 'single' | 'multi') {
    if (mode === 'single') {
      return new SingleSelectStrategy();
    } else if(mode === 'multi') {
      return new MultiSelectStrategy();
    }

    throw new Error(`Invalid argument given, mode=${mode}`);
  }

}
