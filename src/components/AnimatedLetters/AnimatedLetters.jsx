import './AnimatedLetters.scss'

// 3 arg = 
// 1 class you want to apply to characters 
// 2 array of the characters
// 3 index
const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;