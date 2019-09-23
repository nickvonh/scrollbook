import React from 'react';

class Book extends React.Component {

	constructor(props) {
		super(props);

		/*
			Layer options:
				src - the src of the image
				x - the x position, can be px or %, e.g. '50px' or '5%'
				y - same as x but y position
				width - the width of the img, if 'fill' overrides x,y position and just fills the space to 100% width; will hide overflow-y
				duration - the number of frames (inclusive) this layer will be frameIndex for; doesn't extend the total frames (yet?), like if you put duration 500 and there are only 4 frames it will only run 4 frames max.
		*/

		this.layers = [
			// Arc 1
			{
				src: 'sky.jpeg',
				width: 'fill',
				duration: 8
			},
			{
				src: 'bird-down.png',
				width: '10%',
				x: '10%',
				y: '40%'
			},
			[
				{
					src: 'bird-mid.png',
					width: '10%',
					x: '30%',
					y: '35%'
				},
				{
					src: 'seed.png',
					width: '2%',
					x: '45%',
					y: '50%',
				},
			],
			[
				{
					src: 'bird-up.png',
					width: '10%',
					x: '50%',
					y: '30%'
				},
				{
					src: 'seed.png',
					width: '2%',
					x: '50%',
					y: '60%',
				},
			]
		];

		this.pixelsPerFrame = 1000;

		this.state = {
			frameIndex: 0
		};
	}

	onScrollCalculateFrame() {
		const {
			pixelsPerFrame,
			layers
		} = this;

		this.setState({
			frameIndex: Math.round(window.scrollY/pixelsPerFrame)
		});
	}

	get activeLayers() {
		const activeLayers = [];
		for (let i = 0; i < this.state.frameIndex + 1; i++) {
			const layer = this.layers[i];
			
			// if the layer has multiple assets
			// loop through the assets and add them to
			// activeLayers with the same i index
			if(Array.isArray(layer)){
				for(let each of layer){
					if (
						(each.duration && each.duration > (this.state.frameIndex - i)) ||
						i == this.state.frameIndex
					) {
						activeLayers.push(each);
					}
				}
			}else{
				if (
					(layer.duration && layer.duration > (this.state.frameIndex - i)) ||
					i == this.state.frameIndex
				) {
					activeLayers.push(layer);
				}
			}
		}
		return activeLayers;
	}


	componentDidMount() {
		window.addEventListener('scroll', () => this.onScrollCalculateFrame());
		this.props.setHeight && this.props.setHeight(this.layers.length * this.pixelsPerFrame);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', () => this.onScrollCalculateFrame());
	}

	render() {
		console.log('Current frame:', this.state.frameIndex);
		const activeLayers = this.activeLayers.map(ea => <img src={`img/${ea.src}`} style={(() => {
			const style = {};
			if (ea.width !== 'fill') {
				ea.x && (style.left = ea.x);
				ea.y && (style.top = ea.y);
				ea.width && (style.width = ea.width);
			} else {
				style.width = '100%';
			}
			return style;
		})()}
		/>);

		return (
			<div className = "Book" > 
				{activeLayers}
			</div>
		);
	}
}

export default Book;