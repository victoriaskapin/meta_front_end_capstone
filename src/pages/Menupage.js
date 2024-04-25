import './Pages.Style.scss';
import recipes from '../recipes';
import { useState } from 'react';
import Modal from '../Components/Modal';
import Little_lemon_logo from '../Assets/small_logo.png';

const RecipeCard =(props)=>{
  return(
    <div key={props.recipe.id} className='menu-items'>
      <img src={props.recipe.image} alt={props.recipe.description} />
      <div className='menu-content'>
        <div className='heading'>
          <h5>{props.recipe.title}</h5>
          <p>$ {props.recipe.price}</p>
        </div>
        <p>{props.recipe.description}</p>
      </div>
      <button className='orderbtn' onClick={props.handleClick}>Order now</button>
    </div>
  )
}

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = ()=>{
    setShowModal(!showModal);
  }
  const imgStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    width:'130px',
    padding:'10px'
  }

  return (
    <main className="Menu">
      <div className='menu-header'>
        <h2> This weeks specials! </h2>
        <button onClick={toggleModal}>Orden Menu</button>
      </div>
      <div className='cards'>
        {
          recipes.map(recipe =>{return <RecipeCard recipe={recipe} handleClick={toggleModal} key={recipe.id}/>})
        }
      </div>
      {showModal && 
      <Modal toggleModal={toggleModal}>
        <img src={Little_lemon_logo} style={imgStyle} alt="little lemon logo"/>
        <h3> Your order has been placed!</h3>
      </Modal>}
      
    </main>
  );
}

export default Menu;