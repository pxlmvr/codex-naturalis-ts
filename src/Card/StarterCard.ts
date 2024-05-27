import { Maybe } from '@/utils/types/maybe'
import { Card, CardColor, CardResource } from '.'
import { Corner } from './Corner'

export class StarterCard extends Card {
  private resources: CardResource[] // This represent the potential resource(s) in the middle of the card

  constructor(
    color: CardColor,
    corners: Array<Maybe<Corner>>,
    front: boolean,
    resources: CardResource[]
  ) {
    super(color, corners, front)
    this.resources = resources
  }

  getResources(): CardResource[] {
    return this.resources
  }
}
