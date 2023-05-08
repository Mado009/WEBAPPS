import CardItem from "./CardItem"
import "./CardItem.css"

function Property() {

    return (
        <div className='property'>
            <h1>Properties</h1>
            <p>Gjeni shtepin e enderrave tuaja</p>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="/images/img-3.jpg"
                            text="Vile"
                            label='Shitet'
                            path='/services'
                        />

                        <CardItem
                            src="/images/img-5.jpg"
                            text="Apartament 1+1"
                            label='Qira'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-6.jpg"
                            text="Apartament 2+1"
                            label='Qira'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-7.jpg"
                            text="Apartament "
                            label='Shitet'
                            path='/services'
                        />


                        <CardItem
                            src="/images/img-10.jpg"
                            text="Apartament 2+1"
                            label='Shitet'
                            path='/services'
                        />

                        <CardItem
                            src="/images/img-9.jpg"
                            text="Apartament 3+2"
                            label='Shitet'
                            path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Property