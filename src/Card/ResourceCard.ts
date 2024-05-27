import { Card, CardColor } from '.'
import { Corner } from './Corner'

export class ResourceCard extends Card {
  constructor(color: CardColor, corners: Array<Corner | null>, front: boolean) {
    super(color, corners, front)
  }
}
