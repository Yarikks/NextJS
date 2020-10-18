import Card from "./Card";

export default function CardDeck() {
  return (
    <>
      <div className={"row"}>
        <div className={"col-12"}>
          <div className={"custom-card-deck"}>
            <Card
              title="SampleOcean Ultimate Midi Pack"
              text="​Make perfect-sounding, sophisticated chords without spending years learning music theory."
              href="https://pack.sampleocean.com/"
              imgSrc="img/sampleocean.png"
            />

            <Card
              title="Chords progressions"
              text="Ultimate List of 20 Sad & Emotional Chord Progressions in 2020"
              href="https://chordchord.com/20-sad-and-emotional-chord-progressions"
              imgSrc="img/chords.png"
            />

            <Card
              title="Platformer on js"
              text="Try yourself in 2D mini-game PLATFORMER."
              href="yarikks.github.io/platformer_js/"
              imgSrc="img/platformer.png"
            />

            <Card
              title="Tetris on js"
              text="Try yourself on other 2D game TETRIS."
              href="yarikks.github.io/tetris_js/"
              imgSrc="img/tetris.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
