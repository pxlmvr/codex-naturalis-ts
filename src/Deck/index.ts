import { Card } from '@/Card'

export abstract class Deck {
  private cards: Card[]

  constructor(cards: Card[]) {
    this.cards = cards
  }

  draw(): Card {
    if (this.cards.length === 0) {
      throw new Error('No cards left in the deck')
    }
    const drawnCard = this.cards[Math.floor(Math.random() * this.cards.length)]

    /** Remove drawn card from deck */
    this.cards.filter(
      (card: Card) => card.getCardId() !== drawnCard.getCardId()
    )

    return drawnCard
  }
}
