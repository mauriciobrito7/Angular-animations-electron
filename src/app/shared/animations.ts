import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const scale: AnimationEntryMetadata =
      /*función trigger que vamos a llamar de una forma especifica
    * para poder concatenar la vista con la funcionalidad que le estamos
    * agregando
    */
    trigger('heroState',
    /*Este trigger puede recibir otro array donde agregaremos unos estados y a esos estados vamos agregarle estilos*/
    [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive=>activo', animate('100ms ease-in')),
      transition('active=>inactive', animate('100ms ease-out'))
    ]);
