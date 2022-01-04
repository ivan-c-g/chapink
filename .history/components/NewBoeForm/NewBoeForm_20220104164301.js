import { get } from "mongoose"
import { useEffect, useState } from "react"
import { validateText } from "../../utils/string"
import { ContainerForm } from "./NewBoeForm.styled"
import BoeService from '../../services/boe.services'

export const NewBoeForm = () => {

    const [street, setStreet] = useState("")
    const [number, setNumber] = useState(0)
    const [strais, setStrais] = useState("")
    const [plant, setPlant] = useState("")
    const [door, setDoor] = useState("")
    const [typeProperty, setTypeProperty] = useState("")

    const [propertyPrice, setPropertyPrice] = useState(0)
    const [broker, setBroker] = useState(0)
    const [licenseAndFees, setLicenseAndFees] = useState(0)
    const [reform, setReform] = useState(0)
    const [interiorDesign, setInteriorDesign] = useState(0)
    const [holdingCost, setHoldingCost] = useState(0)
    const [costAcquisition, setCostAcquisition] = useState(0)

    const [c1, setC1] = useState(0)

    const [subtotal, setSubtotal] = useState(0)
    const [valoration, setValoration] = useState(0)
    const [porcentajeDefault, setPorcentajeDefault] = useState(2)
    const [estimatedTerm, setEstimatedTerm] = useState()


    const boeService = new BoeService()

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
            case "interiorDesign":
                setInteriorDesign(value)
                break;
            case "valoration":
                setValoration(value)
                break;
            case "costAcquisition":
                setCostAcquisition(value)
                break;
            case "valoration":
                setValoration(value)
                break;
            case "porcentajeDefault":
                setPorcentajeDefault(value)
                break;
            case "estimatedTerm":
                setEstimatedTerm(value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault(e)
        try {
            const user = await boeService.create({ street, number, strais, plant, door, typeProperty, propertyPrice, broker, licenseAndFees, reform, holdingCost, interiorDesign, subTotal: getSubtotalPrice(), valoration, costAcquisition: getCostAcquisition(), chhggManagemetFee: getChhManagementFee(), totalInversion: getTotalInversion(), valoration, costOfSale: getTotalCostOfSale(), priceNetoSale: getPriceNetoSale(), estimatedTerm })
        } catch (error) {
            console.log(error)
        }
    }

    const getSubtotalPrice = () => {

        let result = 0
        result = Number.parseFloat(propertyPrice, 2) + Number.parseFloat(costAcquisition, 2) + Number.parseFloat(reform, 2) +
            Number.parseFloat(broker, 2) + Number.parseFloat(licenseAndFees, 2) + Number.parseFloat(holdingCost, 2) + Number.parseFloat(interiorDesign, 2)
        return result

    }

    const getCostAcquisition = () => {
        let cost = 0
        cost = typeProperty === "oficina" || typeProperty === "local" ?
            (propertyPrice * 0.071).toFixed(2) :
            (propertyPrice * 0.032).toFixed(2)
        console.log(cost)
        return cost
    }
    const getChhManagementFee = () => {
        let cost = 0
        cost = typeProperty === "oficina" || typeProperty === "local" ?
            (getSubtotalPrice() * 0.071).toFixed(2) :
            (getSubtotalPrice() * 0.032).toFixed(2)
        console.log(cost)
        return cost
    }

    const getTotalInversion = () => {

        let cost = 0
        cost = getSubtotalPrice() + Number.parseFloat(getChhManagementFee())
        return cost

    }
    const getTotalCostOfSale = () => {
        let cost = 0
        cost = Number.parseFloat(valoration * porcentajeDefault / 100).toFixed(2)
        return cost
    }

    const getPriceNetoSale = () => {
        let cost = 0
        cost = Number.parseFloat(valoration - getTotalCostOfSale()).toFixed(2)
        return cost
    }

    const getBenefit = () => {
        let cost = 0
        // cost = Number.parseFloat(getPriceNetoSale() - getTotalInversion()).toFixed(2)
        return cost
    }

    const getMargin = () => {
        let cost = 0
        // cost = Number.parseFloat(getBenefit() / getTotalInversion()).toFixed(2)
        return cost
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

                    <label>Tipo de inmueble actual: </label>

                    <select name="select" onChange={(e) => onChange(e)} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>seleccione una opcion ... </option>
                        <option value="oficina" >Oficina</option>
                        <option value="local" >Local</option>
                        <option value="piso">Piso</option>
                        <option value="chalet">Chalet</option>
                    </select>

                    <label>Precio del inmueble: </label>
                    <input type="number" name="propertyPrice" onChange={(e) => onChange(e)} value={propertyPrice} />

                    <label>Coste de adquisición: {typeProperty === "oficina" || typeProperty === "local" ?
                        <span>7.10%</span> :
                        <span>3.2%</span>}
                    </label>

                    <input type="number" name="costAcquisition" onChange={(e) => onChange(e)} value={getCostAcquisition()} disabled />

                    <label>Broker: </label>
                    <input type="number" name="broker" onChange={(e) => onChange(e)} value={broker} />

                    <label>Licencia y tasas: </label>
                    <input type="number" name="licenseAndFees" onChange={(e) => onChange(e)} value={licenseAndFees} />

                    <label>Reforma: </label>
                    <input type="number" name="reform" onChange={(e) => onChange(e)} value={reform} />

                    <label>Holding cost: </label>
                    <input type="number" name="holdingCost" onChange={(e) => onChange(e)} value={holdingCost} />

                    <label>Interiorismo y muebles: </label>
                    <input type="number" name="interiorDesign" onChange={(e) => onChange(e)} value={interiorDesign} />

                    <label>Subtotal: </label>
                    <input type="number" name="subtotal" value={getSubtotalPrice()} disabled />

                    <label>CHGG Management fee: {typeProperty === "oficina" || typeProperty === "local" ?
                        <span>6.05%</span> :
                        <span>3.63%</span>}
                    </label>
                    <input type="number" name="chhggManagemetFee" value={getChhManagementFee()} disabled />

                    <label>Inversion total:</label>
                    <input type="number" name="totalInversion" value={getTotalInversion()} disabled />

                    <label>Valoración: </label>
                    <input type="text" name="valoration" onChange={(e) => onChange(e)} value={valoration} />

                    <label>Coste de venta: </label>
                    <input type="text" name="costOfSale" value={getTotalCostOfSale()} disabled />
                    <input type="text" name="porcentajeDefault" onChange={(e) => onChange(e)} value={porcentajeDefault} />

                    <label>Precio neto de venta: </label>
                    <input type="text" name="priceNetoSale" value={getPriceNetoSale()} />

                    <label>Plazo estimado total ( meses ): </label>
                    <input type="number" name="estimatedTerm" onChange={(e) => onChange(e)} value={estimatedTerm} />

                    <div>
                        <h2>Resultado proforma </h2>
                        <label>Beneficio: </label>
                        {/* <input type="number" name="benefit" value={getBenefit()} /> */}
                        <label>Margen: </label>
                        {/* <input type="number" name="margin" value={getMargin()} /> */}
                    </div>

                    <button>Guardar BOE</button>
                </form>
            </ContainerForm>
        </>
    )
}