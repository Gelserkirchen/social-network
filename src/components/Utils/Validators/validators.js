export const valueValidator = (value) => {
    if(value) {return undefined}
    return "you should write a text"
}

export const maxLengthValidator = (MaxLength) => {
    return (value) => {
        // debugger
        if (value.length <= MaxLength) return undefined
        return "you exceed the limit"    
    }
}