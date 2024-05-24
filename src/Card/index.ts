import { Corner } from './Corner'

export enum CardColor {
  RED,
  BLUE,
  GREEN,
  PURPLE,
}

export enum CardResource {
  FUNGI,
  PLANT,
  ANIMAL,
  INSECT,
}

export enum CardObject {
  QUILL,
  INKWELL,
  MANUSCRIPT,
}

export abstract class Card {
  color: CardColor

  constructor(color: CardColor) {
    this.color = color
  }
}
