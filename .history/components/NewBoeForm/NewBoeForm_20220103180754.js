import { get } from "mongoose"
import { useState } from "react"
import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [strais, setStrais] = useState("")
    const [plant, setPlant] = useState("")
    const [door, setDoor] = useState("")
    const [typeProperty, setTypeProperty] = useState(" ")
    const [propertyPrice, setPropertyPrice] = useState("")
    const [broker, setBroker] = useState("")
    const [licenseAndFees, setLicenseAndFees] = useState("")
    const [reform, setReform] = useState("")

    const [holdingCost, setHoldingCost] = useState("")

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
                setPropertyPrice(value)
                break;
            case "broker":
                setBroker(value)
                break;
            case "licenseAndFees":
                setLicenseAndFees(value)
                break;
            case "reform":
                setReform(value)
                break;
            case "holdingCost":
                setHoldingCost(value)
                break;
            default:
                break;
        }
    }

    const getCostAcqusition = () => {
        console.log(object)

    }
    console.log(typeProperty)
    console.log(propertyPrice)
    console.log(licenseAndFees)
    console.log(reform)
    console.log(holdingCost)

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

                    <select name="select" onChange={(e) => onChange(e)} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>seleccione una opcion ... </option>
                        <option value="oficina" >Oficina</option>
                        <option value="local" >Local</option>
                        <option value="piso">Piso</option>
                        <option value="chalet">Chalet</option>
                    </select>

                    <label>Precio del inmueble: </label>
                    <input type="text" name="propertyPrice" onChange={(e) => onChange(e)} value={propertyPrice} />

                    <label>Coste de adquisición:
                        {
                            typeProperty === "oficina" || typeProperty === "local" ?
                                propertyPrice && <p> 7.10% {propertyPrice * 0.71}</p> :
                                <p> 3.2% {propertyPrice * 0.32}</p>
                        }
                    </label>

                    <label>Broker: </label>
                    <input type="text" name="broker" onChange={(e) => onChange(e)} value={broker} />

                    <label>Licencia y tasas: </label>
                    <input type="text" name="licenseAndFees" onChange={(e) => onChange(e)} value={licenseAndFees} />

                    <label>Reforma: </label>
                    <input type="text" name="reform" onChange={(e) => onChange(e)} value={reform} />

                    <label>Holding cost: </label>
                    <input type="text" name="holdingCost" onChange={(e) => onChange(e)} value={holdingCost} />

                    <label>Holding cost: </label>
                    <input type="text" name="holdingCost" onChange={(e) => onChange(e)} value={holdingCost} />
                </form>
            </ContainerForm>
        </>
    )
}