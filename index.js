function validateForm(e){
    e.preventDefault()
    let name = document.reserveForm.name.value
    let number = document.reserveForm.number.value

    if (name.length == 0)
    return alert(`Name cannot be blank`)

    if (number >= 10 || number === 1234567890)
    return alert(`We do not have a table for more than 10 please`)
    if (number === 1234567890)
    return alert(`We do not have a table for more than 10 please`)

    else
    return confirm(`Would you like to continue?`)
}