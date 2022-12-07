export function roll(numSides, numDice, numRolls) {
    let result = [];
    for (let i=0; i<numRolls; i++) {
        let sum = 0;
        for (let j=0; j<numDice; j++) {
            sum += Math.floor(Math.random() * numSides + 1);
        }
        result.push(sum);
    }
    return {sides: numSides, dice: numDice, rolls: numRolls, results: result};
}