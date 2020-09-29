import { ExprArg, ExprVal, query } from "faunadb";
const { And, Equals, If, Or } = query;

export default function DetermineResult(selection: ExprArg, opponentSelection: ExprArg): ExprVal {
  return {
    selection,
    opponentSelection,
    message: If(
      Equals(selection, opponentSelection),
      "It's a tie!",
      If(
        Or(
          And(
            Equals(selection, "Rock"),
            Equals(opponentSelection, "Scissors")
          ),
          And(
            Equals(selection, "Paper"),
            Equals(opponentSelection, "Rock")
          ),
          And(
            Equals(selection, "Scissors"),
            Equals(opponentSelection, "Paper")
          ),
        ),
        "You win!", 
        "You lose!"
      )
    )
  }
}