import Fact from './Fact'
import { ReactPropTypes } from 'react'

const Facts = () => {
  return (
    <ul>
      <Fact content="Was first released in 2013" />
      <Fact content="Was originally created by Jordan Walke" />
      <Fact content="Has well over 100K stars on GitHub" />
      <Fact content="Is maintained by Facebook" />
      <Fact content="Powers thousands of enterprise apps, including mobile apps" />
    </ul>
  )
}

export default Facts