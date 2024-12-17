function Button(){
    const handleClick = (e) => console.log(e);
    return(<button onDoubleClick={handleClick}>CLICK ME</button>)
}
export default Button