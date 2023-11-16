import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'Стул серый',
					img: 'stul.jpg',
					desc: 'Lorem ipsum dolor sit amet, consecteture adipisicrto',
					category: 'chairs',
					price: '49.99'
				},
				{
					id: 2,
					title: 'Швабра',
					img: 'shvabra.jpg',
					desc: 'Lorem ipsum dolor sit amet, consecteture adipisicrto',
					category: 'chairs',
					price: '10'
				},
				{
					id: 3,
					title: 'Столещница',
					img: 'stolesh.jpg',
					desc: 'Lorem ipsum dolor sit amet, consecteture adipisicrto',
					category: 'tables',
					price: '77'
				},
				{
					id: 4,
					title: 'Типо кухня',
					img: 'kuhnya.jpg',
					desc: 'Lorem ipsum dolor sit amet, consecteture adipisicrto',
					category: 'tables',
					price: '500'
				},
				{
					id: 5,
					title: 'Штаны за гривны',
					img: 'shtani.jpg',
					desc: 'Lorem ipsum dolor sit amet, consecteture adipisicrto',
					category: 'others',
					price: '60'
				},
				{
					id: 6,
					title: 'Аккаунт Genshin',
					img: 'genshin.jpg',
					desc: 'Lorem ipsum dolor sit amet, consecteture adipisicrto',
					category: 'others',
					price: '100'
				}
			]
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
	}

	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />
				<Categories chooseCategory={this.chooseCategory} />
				<Items items={this.state.currentItems} onAdd={this.addToOrder} />
				<Footer />
			</div>
		)
	}

	chooseCategory(category) {
		if (category === 'all') {
			this.setState({ currentItems: this.state.items })
			return
		}
		this.setState({
			currentItems: this.state.items.filter(el => el.category === category)
		})
	} //Функция для фильтрации категорий(не изменяя старый масив items)

	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
	} // Функция удаления из корзины товара

	addToOrder(item) {
		let isInArray = false
		this.state.orders.forEach(el => {
			if (el.id === item.id)
				isInArray = true
		})
		if (!isInArray)
			this.setState({ orders: [...this.state.orders, item] })
	} //Функция для добовления товара в карзину + добовляет только 1 раз

}

export default App