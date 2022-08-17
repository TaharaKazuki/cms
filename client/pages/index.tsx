import { Button } from 'antd'
import { ToggleTheme } from '../components/ToggleTheme'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button type="primary">Click me</Button>
      <br />
      <ToggleTheme />
    </div>
  )
}

export default Home
