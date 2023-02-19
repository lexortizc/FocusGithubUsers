import './App.css'
import { useForm } from './hooks/useForm';
import { UserCard } from './components/UserCard';

function App() {
  const { formData, userData, onChange, onSubmit } = useForm({ username: "" })

  return (
    <div className="App">
      <h1>Get GitHub Profile</h1>
      <form onSubmit={ onSubmit }>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={ formData.username } onChange={ onChange }/>
        <button type='submit'>Search</button>
      </form>
      {
        ( userData?.data?.name) && <UserCard
          avatar={ userData.data.avatar_url }
          name={ userData.data.name }
          username={ userData.data.login }
          location={ userData.data.location }
          bio={ userData.data.bio }
          link={ userData.data.html_url }
        ></UserCard>
      }
    </div>

  )
}

export default App
