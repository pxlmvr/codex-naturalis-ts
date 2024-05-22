export class Player {
  name: string
  score: number

  constructor(name: string) {
    this.name = name
    this.score = 0
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
