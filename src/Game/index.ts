import { Player } from '@/Player'

export class Game {
  private players: Player[]
  private running: boolean

  constructor(players: Player[]) {
    this.players = players
    this.running = false
  }

  getPlayers(): Player[] {
    return this.players
  }

  getPlayer(id: number): Player {
    const player: Player | undefined = this.players.find(
      (p: Player) => p.getId() === id
    )

    if (!player) throw new Error(`No player matching id ${id}`)

    return player
  }

  start(): void {
    this.running = true
  }

  end(): void {
    this.running = false
  }

  checkScores(): void {
    const playerReachedFinalScore: boolean = this.players.some(
      (p: Player) => p.getScore() >= 20
    )

    if (playerReachedFinalScore) this.end()
  }
}
