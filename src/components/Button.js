
const Button = ({ label, fn }) => {

    const clickHandler = () => {
        fn()
    }

    return(
        <div className="button" onClick={ () => clickHandler() }>
            { label }
        </div>
    )
}

export default Button