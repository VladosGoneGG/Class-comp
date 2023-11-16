import React, { Component } from 'react'

class Categories extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'Всё'
				},
				{
					key: 'chairs',
					name: 'Стулья'
				},
				{
					key: 'tables',
					name: 'Столы'
				},
				{
					key: 'others',
					name: 'Разное'
				}
			]
		}
	}

	render() {
		return (
			<div className='categories'>
				{this.state.categories.map(el => (
					<div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name} </div>
				))}
			</div>
		)
	}
}

export default Categories