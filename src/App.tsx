import Routes from './Routes'
import { GlobalCSS } from './Global'
import { UserProvider } from './context/user'

export default function App() {
  return <UserProvider>
    <GlobalCSS />
    <Routes />
  </UserProvider>
}

