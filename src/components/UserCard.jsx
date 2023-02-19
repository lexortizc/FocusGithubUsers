export const UserCard = ({ avatar, name, username, location, bio, link }) => {

  return (
    <div>
      <img src={ avatar } alt={ username } />
      <h2>{ name}</h2>
      <span>{ username }</span>
      <span>{ location }</span>
      <span>{ bio }</span>
      <button>
        <a href={ link } target="_blank"> Go to GitHub Profile </a>
      </button>
    </div>
  )
}