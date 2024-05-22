import { Player } from '@/Player'

export class Game {
  players: Player[]

  constructor(players: Player[]) {
    this.players = players
  }
}
