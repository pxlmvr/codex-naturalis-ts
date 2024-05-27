import { Card, CardColor } from '.'
import { Corner } from './Corner'

const emptyCorner: Corner = {
  visible: true,
  resource: null,
  object: null,
}

export const backCorners: Corner[] = Array(4).fill(emptyCorner, 0)

export class ResourceCard extends Card {
  private corners: Array<Corner | null>
  private front: boolean

  constructor(color: CardColor, corners: Array<Corner | null>, front: boolean) {
    super(color)
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
