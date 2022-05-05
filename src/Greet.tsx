import React from 'react'

type GreetProps = {
  name: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>Greet {props.name}</div>
  )
}

export default Greet