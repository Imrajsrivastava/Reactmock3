import React from 'react'
import { Link } from 'react-router-dom'

import {
  Button
} from '@chakra-ui/react'


const Navbar = () => {
  return (
    <div>
     
      <Link to={"/postClassified"}> <Button>Post Classifieds </Button></Link>
      <Link to={"/browserclassified"}> <Button>Browse Classifieds  </Button></Link>
    </div>
  )
}

export default Navbar
