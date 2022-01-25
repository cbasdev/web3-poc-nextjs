import styles from '../styles/Home.module.css'
import { useWeb3React } from '@web3-react/core'
import { useCallback, useEffect } from 'react'
import { connector } from '../config/web3'

export default function Home() {
  const { activate, active, deactivate, error, chainId, account } =
    useWeb3React()

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', true)
  }, [activate])

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect()
  }, [connect])

  const disconnect = () => {
    deactivate()
    localstorage.removeItem('previouslyConnected')
  }

  return (
    <div className={styles.container}>
      <h1>Web 3 DEMO</h1>
      {active ? (
        <>
          <button onClick={disconnect}>Disconnect Wallet</button>
          <p>
            You are connected to {chainId} network <br />
            Your account is: {account} 😱
          </p>
        </>
      ) : (
        <button onClick={connect}>Connect Wallet </button>
      )}
    </div>
  )
}
