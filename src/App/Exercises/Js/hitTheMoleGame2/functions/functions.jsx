import hitSoundFile from './sounds/hit.mp3';
import missedSoundFile from './sounds/missed.mp3';

const backgroundColorDuration = 100;
const hitSound = new Audio(hitSoundFile);
const missedSound = new Audio(missedSoundFile);

export function showRandomMoles(
    moleCount,
    setMoleArray,
) {
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomArray = Array(moleCount)
        .fill(1)
        .reduce((accumulator) => {
            let newNumber = getRandom(0, 9);

            while (accumulator.includes(newNumber)) {
                newNumber = getRandom(0, 9);
            }
            return [...accumulator, newNumber];
        }, []);
    console.log(moleCount);
    console.log(randomArray);

    setMoleArray((previousMoleArray) =>
        previousMoleArray.map((mole, index) => {
            const newMole = { ...mole };
            newMole.isVisible = randomArray.includes(index);

            return newMole;
        })
    );
}
export function hitTheMole(index, moleArray, setMoleArray, score, setScore) {
    if (moleArray[index].isVisible) {
        setScore(score + 1);
        moleArray[index].isVisible = false
        hitSound.play();
    } else {
        missedSound.play();
    }

    setTimeout(() => {
        const newArray = [...moleArray];
        newArray[index].isWhacked = false;
        newArray[index].isVisible = false;
        newArray[index].isMissed = false;
        setMoleArray(newArray);
    }, backgroundColorDuration);
}