import ZodiacCard from '../ZodiacCard/ZodiacCard'
import backgroundImg from '../background.png'
import './Main.css'

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* import the ZodiacCard component */}
      {props.zodiacs.map((zodiac, i) => {
        return <ZodiacCard key={zodiac.name + i} {...zodiac} />
      })}
      {/* get the zodiac array from props */}
      {/* for each item in the `zodiacs` array props, render a ZodiacCard component, passing in the name and the dates as props to the ZodiacCard component */}
      {/* remember that when you map over an array and render out a list, each item in the list needs a unique 'key' prop */}
    </main>
  )
}
