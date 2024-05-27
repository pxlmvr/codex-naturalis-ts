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

const emptyCorner: Corner = {
  visible: true,
  resource: null,
  object: null,
}

export const backCorners: Corner[] = Array(4).fill(emptyCorner, 0)

export abstract class Card {
  color: CardColor
  private corners: Array<Corner | null>
  private front: boolean

  constructor(color: CardColor, corners: Array<Corner | null>, front: boolean) {
    this.color = color
    this.corners = corners
    this.front = front
  }

  getCorners() {
    return this.front ? this.corners : backCorners
  }

  getFront(): boolean {
    return this.front
  }

  setFront(frontValue: boolean): void {
    this.front = frontValue
  }
}
