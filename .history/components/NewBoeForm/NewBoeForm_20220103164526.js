import { useState } from "react"
import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [strais, setStrais] = useState("")
    const [plant, setPlant] = useState("")
    const [door, setDoor] = useState("")

    const handleSubmit = () => {

        console.log("handle")
    }
    const onChange = (e) => {
        const { value, name } = e.target
        console.log(value)
        switch (name) {
            case "street":
                setStreet(value)
                break;
            case "number":
                setNumber(value)
                break;
            case "strais":
                setStrais(value)
                break;
            case "plant":
                setPlant(value)
                break;
            case "door":
                setDoor(value)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <label>Calle: </label>
                    <input type="text" name="street" onChange={(e) => onChange(e)} value={street} />
                    <label>Número: </label>
                    <input type="text" name="number" onChange={(e) => onChange(e)} value={number} />
                    <label>Escalera: </label>
                    <input type="text" name="strais" onChange={(e) => onChange(e)} value={strais} />
                    <label>Planta: </label>
                    <input type="text" name="plant" onChange={(e) => onChange(e)} value={plant} />
                    <label>Puerta: </label>
                    <input type="text" name="door" onChange={(e) => onChange(e)} value={door} />
                    <label>Calle: </label>

                    <select name="select">
                        <option value="value1" selected>Oficina</option>
                        <option value="value2" >Local</option>
                        <option value="value3">Piso</option>
                        <option value="value4">Chalet</option>

                    </select>

                    <input type="text" name="street" onChange={(e) => onChange(e)} value={street} />
                    <label>Número: </label>
                    <input type="text" name="number" onChange={(e) => onChange(e)} value={number} />
                    <label>Escalera: </label>
                    <input type="text" name="strais" onChange={(e) => onChange(e)} value={strais} />
                    <label>Planta: </label>
                    <input type="text" name="plant" onChange={(e) => onChange(e)} value={plant} />
                    <label>Puerta: </label>
                    <input type="text" name="door" onChange={(e) => onChange(e)} value={door} />

                </form>
            </ContainerForm>
        </>
    )
}