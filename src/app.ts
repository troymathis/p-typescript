import express from 'express';
const app = express();
const port = 3000;


type myBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjWithNameArray = Array<{name:string}>;

const oneOfUs: PositiveOddNumbersUnderTen = 1
const bedroomWindow: WindowStates = "open";
const s1: StringArray = ["yo","welcome"];
const objname: ObjWithNameArray = [{name: "hey"}]

interface User {
    name: string;
    id: number;
}

const user1: User = {
    name: "troy",
    id: 1,
}

app.get('/', (req, res) => {
  res.send(`${user1.name}`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});