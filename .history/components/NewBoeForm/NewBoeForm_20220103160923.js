import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const handleSubmit = () => {

        console.log("handle")
    }

    return (
        <>
            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <label>Calle: </label>
                    <input type="text" name="street" />
                    <label>Número: </label>
                    <input type="text" name="number" />
                    <label>Escalera: </label>
                    <input type="text" name="strais" />
                    <label>Planta: </label>
                    <input type="text" name="plant" />
                    <label>Puerta: </label>
                    <input type="text" name="door" />
                </form>
            </ContainerForm>
        </>
    )
}