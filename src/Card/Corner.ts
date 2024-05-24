import { CardObject, CardResource } from '.'

export class Corner {
  visible: boolean
  resource: CardResource | null
  object: CardObject | null

  constructor(
    visible: boolean,
    resource: CardResource | null,
    object: CardObject | null
  ) {
    this.visible = visible
    this.resource = resource
    this.object = object
  }
}
