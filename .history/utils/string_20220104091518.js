
export const validateText = (e) => {
    let tecla = (document.all) ? e.keyCode : e.which
    if (tecla === 8) return true
}