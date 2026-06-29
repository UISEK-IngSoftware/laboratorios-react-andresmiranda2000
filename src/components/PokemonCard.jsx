import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import './PokemonCard.css'

function PokemonCard({ pokemon }) {
  return (
    <Card className="pokemon-card">
      <CardMedia
        component="img"
        image={pokemon.image}
        alt={pokemon.name}
        className="pokemon-image"
      />

      <CardContent className="pokemon-content">
        <Typography variant="h6" component="h2">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pokemon.type}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Ver detalles</Button>
      </CardActions>
    </Card>
  )
}

export default PokemonCard
