import Header from "../../components/home/Header"
import Slider from "../../components/home/Slider"
import Countries from "../../components/home/Countries"
import { useDispatch } from "react-redux"
import { useQuery } from "@tanstack/react-query"
import { getCountries } from "../../service/countryService"
import { useEffect } from "react"
import { setcountryList } from "../../redux/reducers/country.reducer"
import Footer from "../../components/home/Footer"

function HomePage() {

    const dispacth = useDispatch()
    const countriesList = useQuery({
        queryKey: ["countries-list"],
        queryFn: () => getCountries()
    })
    useEffect(() => {
        dispacth(setcountryList(countriesList?.data))
    }, [countriesList?.data])
    
    return (
        <>
            <Header countries={countriesList?.data}/>
            <div className="container">
                <div className="row my-3">
                    <div className="col-lg-5 upper-line-border">
                    </div>
                    <div className="col-lg-2 text-center p-0">
                        <h1 className="mb-0">WELCOME</h1>
                    </div>
                    <div className="col-lg-5 bottom-line-border">

                    </div>
                </div>
                <Slider />
                <Countries />
                <Footer/>
            </div>

        </>
    )
}

export default HomePage