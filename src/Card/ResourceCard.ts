import { Card, CardColor } from '.'
import { Corner } from './Corner'

export class ResourceCard extends Card {
  corners: Array<Corner | null>

  constructor(color: CardColor, corners: Array<Corner | null>) {
    super(color)
    this.corners = corners
  }
}
