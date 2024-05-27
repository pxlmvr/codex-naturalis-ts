import { Card, CardColor, CardResource } from '.'
import { Corner } from './Corner'

export class GoldCard extends Card {
  resourcesNeeded: CardResource[]
  value: number // TODO: this should also accept a function to calculate the value

  constructor(
    color: CardColor,
    corners: Array<Corner | null>,
    front: boolean,
    resourcesNeeded: CardResource[],
    value: number
  ) {
    super(color, corners, front)
    this.resourcesNeeded = resourcesNeeded
    this.value = value
  }
}
