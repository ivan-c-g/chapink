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
                    <label>Calle</label>
                    <input type="text" name="number" />
                    <label>Calle</label>
                    <input type="text" name="strais" />
                    <label>Calle</label>
                    <input type="text" name="plant" />
                    <label>Calle</label>
                    <input type="text" name="door" />
                </form>
            </ContainerForm>
        </>
    )
}