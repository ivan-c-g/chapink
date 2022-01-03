import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const handleSubmit = () => {

        console.log("handle")
    }

    return (
        <>
            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="street" />
                    <input type="text" name="number" />
                    <input type="text" name="street" />
                    <input type="text" name="street" />
                    <input type="text" name="street" />

                </form>
            </ContainerForm>
        </>
    )
}