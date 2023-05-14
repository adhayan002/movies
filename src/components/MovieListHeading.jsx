import { Heading } from '@chakra-ui/react'

function MovieListHeading(props) {
  return (
    <div className='col'>
        <Heading>{props.heading}</Heading>
    </div>
  )
}

export default MovieListHeading