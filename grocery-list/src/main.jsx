import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='total-items'>Items: {props.itemTotal}</span>
    </header>
  )
}

const Item = (props) => {

  return (
    <div className='item'>
      <button className='remove-item' onClick={() => props.removeItem(props.id)}/>
      <span className='item-name'>{props.name}</span>
      <Counter />
    </div>
  )
}

const Counter = () => {

  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    setQuantity(quantity - 1)
  }

  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='decrement' onClick={decrementQuantity}>-</button>
      <button className='increment' onClick={incrementQuantity}>+</button>
      <span className='quantity-amount'>{quantity}</span>
    </div>
  )
}

const App = (props) => {

  const [items, setItems] = useState([
    {
      name: "Apples",
      id: 1
    },
    {
      name: "Bananas",
      id: 2
    },
    {
      name: "Box of Pasta",
      id: 3
    },
    {
      name: "Cookies",
      id: 4
    }
  ])

  const handleRemoveItem = (id) => {
    setItems(prevItems => prevItems.filter(i => i.id !== id))
  }

  return (
    <div className='grocery-list'>
      <Header 
        title='My Grocery List' 
        itemTotal={items.length}
      />

      {items.map(item => 
        <Item 
          name={item.name}
          id={item.id}
          key={item.id}
          removeItem={handleRemoveItem}
        />
      )}
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);