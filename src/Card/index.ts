import { v4 as uuidv4 } from 'uuid'

import { Maybe } from '@/utils/types/maybe'
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
  /**  A unique identifyer for single card for deck filtering */
  private id: string

  private color: CardColor
  private corners: Array<Maybe<Corner>>
  private front: boolean

  constructor(color: CardColor, corners: Array<Maybe<Corner>>, front: boolean) {
    this.id = uuidv4()
    this.color = color
    this.corners = corners
    this.front = front
  }

  getCardId(): string {
    return this.id
  }

  getCorners() {
    return this.front ? this.corners : backCorners
  }

  getFront(): boolean {
    return this.front
  }

  getColor(): CardColor {
    return this.color
  }

  setFront(frontValue: boolean): void {
    this.front = frontValue
  }
}
