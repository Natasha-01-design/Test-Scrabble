

function isWordValid(word){
    const dictionary = [
        'HELLO', 'WORLD', 'REACT', 'SCRABBLE', 'CODE', 'FIGMA', 'TILE', 'RACK', 'BOARD',
    'SCORE', 'TURN', 'GAME', 'JAVASCRIPT', 'PYTHON', 'FRONTEND', 'BACKEND',
    'DEVELOPER', 'FUNCTION', 'VARIABLE', 'BUTTON', 'INPUT', 'TIMER', 'PLAYER',
    'MOVE', 'WORD'
    ]
    return(
        dictionary.includes(word.toUpperCase())
    )
}

export default isWordValid;