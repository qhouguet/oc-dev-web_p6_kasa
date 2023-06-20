import Card from '../Card/Card'
import logements from '../../datas/logements.json'

function Cards() {
  return (
    <div className="wrapper-width">
      <section className="cards">
        {logements.map((data) => {
          return (
            <Card
              title={data.title}
              image={data.cover}
              alt={data.title}
              id={data.id}
              key={data.id}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Cards
