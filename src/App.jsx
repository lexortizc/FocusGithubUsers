import './App.css'
import { useForm } from './hooks/useForm';
import { UserCard } from './components/UserCard';
import { UserForm } from './components/UserForm';

function App() {
  const { formData, userData, onChange, onSubmit } = useForm({ username: "" })

  return (
    <div>
      <h1 className="mb-6 text-white">Get GitHub Profile</h1>
      <div className="flex flex-row">
          <UserForm
            formData={ formData }
            onChange={ onChange }
            onSubmit={ onSubmit }
          />
        {
          ( userData?.data?.name ) &&
          <UserCard
            avatar={ userData.data.avatar_url }
            name={ userData.data.name }
            username={ userData.data.login }
            location={ userData.data.location }
            bio={ userData.data.bio }
            link={ userData.data.html_url }
          />
        }
      </div>
    </div>

  )
}

export default App
