export const UserForm = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={ onSubmit } className="basis-1/2 px-5">
      <input
        type="text"
        name="username"
        placeholder="username"
        value={ formData.username }
        onChange={ onChange }
        className="block w-full uppercase bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full h-9 text-center p-2 mb-5"/>
      <button
        type="submit"
        className="w-full md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg text-white rounded-full hover:bg-purple-600 "
      >
        Search
      </button>
    </form>
  )
}