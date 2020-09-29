import { query } from "faunadb";
import { Debug, RandomString, Switch } from "faunadb-fql-lib";
import DetermineResult from '../lib/DetermineResult';
const { Lambda, Let, Query, Var } = query;

const selectionMap = {
  R: "Rock",
  P: "Paper", 
  S: "Scissors"
};

const Play = {
  name: "play",
  body: Query(
    Lambda(
      ["selection"],
      Let({
        randomCharacter: RandomString(1, "RPS"),
        opponentSelection: Switch(Var("randomCharacter"), selectionMap),
      },
        DetermineResult(Var("selection"), Var("opponentSelection"))
      )
    )
  ),
};

export = Play;
