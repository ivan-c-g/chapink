import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const handleSubmit = () => {

        console.log("handle")
    }

    return (
        <>
            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <label>Calle</label>
                    <input type="text" name="street" />
                    <input type="text" name="number" />
                    <input type="text" name="strais" />
                    <input type="text" name="plant" />
                    <input type="text" name="door" />
                </form>
            </ContainerForm>
        </>
    )
}