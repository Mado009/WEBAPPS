import CardItem from "./CardItem"
import "./CardItem.css"

CardItem
const Property = () => {
  return (
    <div className="property">
      <h1>Properties</h1>
      <p>Gjeni shtepin e enderrave tuaja</p>
      <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="/images/img.jpg"
                            text="Vile"
                            label='Shitet'
                            path='/services'
                        />

                        <CardItem
                            src="/images/img.jpg"
                            text="Apartament 1+1"
                        label='Qira'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-5.jpg"
                            text="Apartament 2+1"
                            label='Qira'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-8.jpg"
                            text="Apartament "
                            label='Shitet'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img.jpg"
                            text="Vile"
                            label='Qira'
                            path='/services'
                        />

                        <CardItem
                            src="/images/img.jpg"
                            text="Apartament 2+1"
                            label='Shitet'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-5.jpg"
                            text="Biznes"
                            label='Qira'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-8.jpg"
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