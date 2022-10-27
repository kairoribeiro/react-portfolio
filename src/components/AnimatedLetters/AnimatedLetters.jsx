import './AnimatedLetters.scss'

// 3 arg = 
// 1 class you want to apply to characters 
// 2 array of the characters
// 3 index
const AnimatedLetters = (props) => {
    return (
        <span>
            {
                props.strArray.map((char, i) => (
                    <span key={char + i} className={`${props.letterClass} _${i + props.idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;