import React from 'react'
import './styles.module.css'

export const Growl = ({ active, message, onDismissed }) => {
  const [state, setState] = React.useState(true)

  React.useEffect(() => {
    // Dismiss notification after 3 seconds
    setTimeout(() => {
      setState(false)
    }, 3000)

    setState(true)
  }, [active])

  const handleClick = () => {
    setState(false)
    onDismissed()
  }

  return (
    <div className={`growl${active && state ? ' active' : ''}`}>
      {message}
      <div onClick={handleClick} className='growl-close'></div>
    </div>
  )
}

export function useGrowl() {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false)

  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active)
    }
  ]
}
