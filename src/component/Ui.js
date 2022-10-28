export default function Ui({ score, bestScore }) {
  return (
    <div className="ui">
      <h1>Memory Game</h1>
      <h3>Get points by clicking on an image but don't click it more than once!</h3>
      <h4>Score: {score}</h4>
      <h4>Best Score: {bestScore}</h4>
    </div>
  );
}
