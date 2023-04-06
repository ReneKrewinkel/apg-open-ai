
const Button = ({ label, fn, type }) => {

    const clickHandler = () => {
        fn(type)
    }

    return(
        <div className="button" onClick={ () => clickHandler() }>
            { label }
        </div>
    )
}

export default Button