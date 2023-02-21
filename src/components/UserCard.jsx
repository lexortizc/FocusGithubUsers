export const UserCard = ({ avatar, name, username, location, bio, link }) => {

  return (
    <div className="basis-1/2 flex flex-col gap-2 p-5 dark:bg-gray-700">
      <img src={ avatar } alt={ username } className="rounded" />
      <h2 className="text-2xl text-white font-bold">{ name}</h2>
      <span>{ username }</span>
      <span>{ location }</span>
      <span>{ bio }</span>
      <button className="w-full md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg text-white rounded-full hover:bg-purple-600 ">
        <a href={ link } target="_blank" className="text-white hover:text-white"> Go to GitHub Profile </a>
      </button>
    </div>
  )
}