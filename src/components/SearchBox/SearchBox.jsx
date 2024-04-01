import css from "./SearchBox.module.css"

function SearchBox({value, handler}){
return (
    <label className={css.label} htmlFor="input">Find contacts by name
        <input className={css.input} value={value} onChange={e => handler(e.target.value)} type="text" id="input" placeholder="Please enter the name"/>
    </label>   
)
}

export default SearchBox