import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'


const showOrders = (props) => {
	// Переменная + логика для показывание суммы стоимости
	let summa = 0
	props.orders.forEach(el => summa += Number.parseFloat(el.price))
	return (<div>
		{props.orders.map(el => (
			<Order onDelete={props.onDelete} key={el.id} item={el} />
		))}
		<p className='summa'>Сумма:{new Intl.NumberFormat().format(summa)}$</p>
		{/*В сумме столько методов, что бы показывало не больше двух нулуй после точки типо так 100.000007*/}
	</div>)
} // Функция для показа товара если есть в корзине и сумма стоимости

const showNothing = () => {
	return (<div className='empty'>
		<h2>Товаров нет</h2>
	</div>)
} // Функция когда в корзине ничего нету

const Header = (props) => {
	// стоит изначально false то есть не открыта
	let [cartOpen, setCartOpen] = useState(false)

	return (
		<header>
			<div>
				<span className='logo'>House Staff</span>
				<ul className='nav'>
					<li>Про нас</li>
					<li>Контакты</li>
					<li>Кабинет</li>
				</ul>
				<FaShoppingCart
					onClick={() => setCartOpen(cartOpen = !cartOpen)}
					className={`shop-cart-button ${cartOpen && 'active'}`} />
				{cartOpen && (
					// Логика отображения наличия или отстутсвия товара
					<div className='shop-cart'>
						{props.orders.length > 0 ?
							showOrders(props) : showNothing()}
					</div>
				)}
			</div>
			<div className='presentation'></div>
		</header>)
}

// сдесь pres основной банер магаза
export default Header