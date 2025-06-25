import { useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"

function Countries() {
    const countries = useSelector((state) => state?.country?.countries)
    console.log("sd", countries)
    const [countriesShowCount, setcountriesShowCount] = useState(10)
    const changeShowCount = () => {
        setcountriesShowCount((prev) => prev + 10)
    }
    return (
        <>
            <div className="row">
                {countries?.slice(0, countriesShowCount).map((item, index) => (
                    <div className="col-lg-6" key={index}>
                        <div className="countryCard shadow d-flex align-items-center p-4 gap-3">
                            <img
                                src={item.flag}
                                alt={item.name}
                                className="flag-img"
                            />
                            <div>
                                <h3 className="mb-1">{item.name}</h3>
                                <p className="mb-0">{item.region}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {
                countries &&
                countries?.length > 10 &&
                <div className="text-center">
                    <Button onClick={changeShowCount} className="my-3">Load more</Button>

                </div>

            }
        </>


    )
}

export default Countries