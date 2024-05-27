import { Maybe } from '@/utils/types/maybe'
import { Card, CardColor, CardResource } from '.'
import { Corner } from './Corner'

export class GoldCard extends Card {
  private resource: CardResource | null // Represent the potential resource in the middle of the card
  private requirements: CardResource[]
  private value: number // TODO: this should also accept a function to calculate the value

  constructor(
    color: CardColor,
    corners: Array<Maybe<Corner>>,
    front: boolean,
    resource: Maybe<CardResource>,
    resourcesNeeded: CardResource[],
    value: number
  ) {
    super(color, corners, front)
    this.resource = resource
    this.requirements = resourcesNeeded
    this.value = value
  }

  getResource(): Maybe<CardResource> {
    return this.resource
  }

  getRequirements(): CardResource[] {
    return this.requirements
  }

  getValue(): number {
    return this.value
  }
}
