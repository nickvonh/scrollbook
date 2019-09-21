import React from 'react';
import Page from './Page';

import page1 from '../resources/page1.png';
import page2 from '../resources/page2.png';
import page3 from '../resources/page3.png';

class Book extends React.Component {

	constructor(props) {
		super(props);

		console.log(page1);
		this.pages = [
			page1,
			page2,
			page3
		]

		this.state = {
			active: 0
		}
	}


	componentDidMount() {
		window.onscroll = () => {
			
			if(window.scrollY/600 > this.pages.length-1){
				this.setState({
					active : this.pages.length
				}) 
			}else{
				this.setState({
					active : Math.round(window.scrollY/300)
				}) 
			}

			console.log(window.scrollY)
		}
	}



	render() {
		const curr = this.pages[this.state.active];
		const next = this.state.active < this.pages.length-1 ? this.pages[this.state.active + 1] : null;
		const prev = this.state.active > 0 ? this.pages[this.state.active -1] : null;

		console.log(curr, next, prev)
		return (
			<div className = "Book" > 
				{prev ? <Page className={'prev'} page={prev} index={'prev'}/> : null}
				<Page className={'curr'} page={curr} index={'curr'}/>
				{next ? <Page className={'next'} page={next} index={'next'}/> : null}
			</div>
		);
	}
}

export default Book;