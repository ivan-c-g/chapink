import { get } from "mongoose"
import { useState } from "react"
import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [strais, setStrais] = useState("")
    const [plant, setPlant] = useState("")
    const [door, setDoor] = useState("")
    const [typeProperty, setTypeProperty] = useState("")
    const [propertyPrice, setPropertyPrice] = useState("")

    const [costAcquistion, setCostAcquisition] = useState(0)



    const handleSubmit = () => {

        console.log("handle")
    }
    const onChange = (e) => {
        const { value, name } = e.target
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
            case "select":
                setTypeProperty(value)
                break;
            case "propertyPrice":
                setTypeProperty(value)
                break;
            default:
                break;
        }
    }

    const getCostAcqusition = () => {
        console.log(object)

    }
    console.log(typeProperty)

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

                    <label>Tipo de inmueble actual: </label>

                    <select name="select" onChange={(e) => onChange(e)}>
                        <option value="oficina" selected>Oficina</option>
                        <option value="local" >Local</option>
                        <option value="piso">Piso</option>
                        <option value="chalet">Chalet</option>
                    </select>

                    <label>Precio del inmueble: </label>
                    <input type="text" name="propertyPrice" value={propertyPrice} />

                    <label>Coste de adquisición: </label>
                    {/*
                    <input type="text" name="acquisitionCost" value={strais} />

                    <label>Planta: </label>
                    <input type="text" name="plant" onChange={(e) => onChange(e)} value={plant} />

                    <label>Puerta: </label>
                    <input type="text" name="door" onChange={(e) => onChange(e)} value={door} /> */}

                </form>
            </ContainerForm>
        </>
    )
}