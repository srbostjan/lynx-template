import React, { useCallback, useEffect } from 'react'
import Navigator from './screens/Navigator.jsx'
import Loading from './components/Loading/index.jsx'
import { useUserStore } from './store/store.js'

function App() {
  const setUser = useUserStore(state => state.setUser)
  const [loading, setLoading] = React.useState(true)

  const fetchUser = useCallback(async () => {
    setTimeout(() => {
      setUser('user')
      setLoading(false)
    }
    , 1000)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (loading) {
    return <Loading />
  }

  return (
    <Navigator />
  )
}

export default App