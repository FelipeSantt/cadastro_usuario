import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [{
    id: '265dfsgdghb22',
    name: 'Felipe',
    age: 31,
    email: 'felipe@gmail.com',
  },
  {
    id: '265dfsgdghb86',
    name: 'Lorenna',
    age: 26,
    email: 'lorenna@gmail.com',

  }];
  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        <input placeholder='Nome' type="text" name='nome' />
        <input placeholder='Idade' type="text" name='idade' />
        <input placeholder='Email' type="email" name='email' />
        <button type='button'>Cadastrar</button>
      </form>
      {users.map( (user) => (
        <div key={user.id} className='card' >
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
      )
}

    export default Home
