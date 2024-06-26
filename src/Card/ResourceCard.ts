import { Maybe } from '@/utils/types/maybe'
import { Card, CardColor, CardResource } from '.'
import { Corner } from './Corner'

export class ResourceCard extends Card {
  private resource: CardResource | null // Represent the potential resource in the middle of the card

  constructor(
    color: CardColor,
    corners: Array<Maybe<Corner>>,
    front: boolean,
    resource: Maybe<CardResource>
  ) {
    super(color, corners, front)
    this.resource = resource
  }

  getResource(): Maybe<CardResource> {
    return this.resource
  }
}
