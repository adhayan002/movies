import { Input } from '@chakra-ui/react'

function SearchBox(props) {
  return (
    <div className='col col-sm-4'>
        <Input className='form-control' value={props.searchValue} onChange={(e)=>{props.setSearchValue(e.target.value)}} placeholder='Type to Search!!' />
    </div>
  )
}

export default SearchBox