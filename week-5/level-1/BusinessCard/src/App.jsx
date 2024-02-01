import { useState } from 'react'
import { Card } from './components/Card'

function App() {
  const [user, setUser] = useState({
    name: "Mohammed",
    description: "Developer",
    interests: [ "playing", "reading" ],
    socials: {
        linkedin: "linkedin.com",
        twitter: "twitter.com"
    }
  })
  return (
    <Card user={user} setUser={setUser}></Card>
  );
}


export default App;
