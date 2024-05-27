import { CardResource } from '@/Card'

type ResourceCondition = { resource: CardResource; count: number }

// TODO: this should represent the condition for having a certain number of card linked a certain way.
type PlacementCondition = unknown

type Condition = ResourceCondition | PlacementCondition

export class Objective {
  private value: number // TODO: this should also accept a function to compute the value
  private condition: Condition

  constructor(value: number, condition: Condition) {
    this.value = value
    this.condition = condition
  }

  getValue(): number {
    return this.value
  }

  getCondition(): Condition {
    return this.condition
  }
}
