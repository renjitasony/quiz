import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'creativeminjs', src: '../assets/js/creative.min.js' },
  { name: 'random-gen', src: '../../../assets/js/random-num-generator.js' }
];

declare var document: any;


@Injectable({
  providedIn: 'root'
})
export class ScriptloaderService {

  constructor() { }
}
