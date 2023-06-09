import Banner from 'components/ui/Banner/Banner'
import image from 'images/about_banner.webp'
import Collapse from 'components/ui/Collapse/Collapse'

function About() {
  // On vient stocker dans un objet les valeurs de nos collapses de la page About
  // cela permettra de la mettre à jour facilement dans le futur
  const about = [
    {
      title: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
      id: '1fiab',
    },
    {
      title: 'Respect',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      id: '2Resp',
    },
    {
      title: 'Service',
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      id: '3Serv',
    },
    {
      title: 'Sécurité',
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      id: '4Secu',
    },
  ]
  return (
    <>
      <div className="about-banner">
        <Banner
          type="about"
          image={image}
          alt="Photo d'une vallée au milieu des montagnes."
        />
      </div>
      <section className="about-collapse">
        {about.map((data) => {
          return (
            <Collapse
              title={data.title}
              description={data.description}
              key={data.id}
            />
          )
        })}
      </section>
    </>
  )
}

export default About
