

const Input = ({ handler }) => {

    const inputHandler = (value) => {
        handler(value)
    }

    return(
        <div>
            <input type="text"
                   placeholder="prompt"
                   //value={prompt}
                   onChange={ (e) => inputHandler(e.target.value)}
                   />
        </div>
    )

}


export default Input