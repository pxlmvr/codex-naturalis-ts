export class Player {
  private id: number
  private name: string
  private score: number

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    this.score = 0
  }

  getId(): number {
    return this.id
  }

  getName(): string {
    return this.name
  }

  setName(newName: string): void {
    this.name = newName
  }

  getScore(): number {
    return this.score
  }

  setScore(newScore: number): void {
    this.score = newScore
  }
}
