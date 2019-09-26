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
			
			//Frame 1
			[
				{
					src: 'sky.jpeg',
					bottom: true,
					width: '100%',
					duration: 1000
				},
				{
					src: 'white-cloud-1.png',
					width: '15%',
					x: '20%',
					y: '7%'
				},
				{
					src: 'ground-1.png',
					width: '100%',
					bottom: true,
					duration: 5
				},
			],

			//Frame 2
			[
				{
					src: 'bird-down.png',
					width: '10%',
					x: '10%',
					y: '30%'
				},
				{
					src: 'white-cloud-1.png',
					width: '15%',
					x: '15%',
					y: '7%'
				}
			],

			//Frame 3
			[
				{
					src: 'bird-mid.png',
					width: '10%',
					x: '30%',
					y: '25%'
				},
				{
					src: 'seed.png',
					width: '2%',
					x: '45%',
					y: '50%',
				},
				{
					src: 'white-cloud-1.png',
					width: '15%',
					x: '10%',
					y: '7%'
				}
			],

			//Frame 4
			[
				{
					src: 'bird-up.png',
					width: '10%',
					x: '50%',
					y: '20%'
				},
				{
					src: 'seed.png',
					width: '2%',
					x: '50%',
					y: '60%',
				},
				{
					src: 'white-cloud-1.png',
					width: '15%',
					x: '5%',
					y: '7%'
				}
			],

			//Frame 5
			[
				{
					src: 'bird-down.png',
					width: '10%',
					x: '75%',
					y: '15%'
				},
				{
					src: 'seed.png',
					width: '2%',
					x: '57%',
					y: '77%',
				}
			],

			//Frame 6
			[
				{
					src: 'bird-up.png',
					width: '10%',
					x: '85%',
					y: '5%'
				},
				{
					src: 'rain-cloud1.png',
					width: '40%',
					x: '95%',
					y: '10%'
				},
				{
					src: 'ground-1.png',
					width: '100%',
					bottom: true
				}
			],

			//Frame 7
			[
				{
					src: 'rain-cloud3.png',
					width: '35%',
					x: '75%',
					y: '10%'
				},
				{
					src: 'rain-4.png',
					width: '20%',
					x: '75%',
					y: '30%'
				},
				{
					src: 'ground-1.png',
					width: '100%',
					bottom: true
				}
			],

			//Frame 8
			[
				{
					src: 'rain-cloud4.png',
					width: '35%',
					x: '57%',
					y: '10%'
				},
				{
					src: 'rain-2.png',
					width: '30%',
					x: '57%',
					y: '27%'
				},
				{
					src: 'ground-2.png',
					width: '100%',
					bottom: true
				},
				{
					src: 'tree-background-2.png',
					width: '15%',
					x: '83%',
					y: '55%',
					duration: 1000
				}
			],

			//Frame 9
			[
				{
					src: 'rain-cloud3.png',
					width: '35%',
					x: '35%',
					y: '10%'
				},
				{
					src: 'rain-1.png',
					width: '30%',
					x: '38%',
					y: '28%'
				},
				{
					src: 'ground-5.png',
					width: '100%',
					bottom: true
				},
				{
					src: 'sprout-1.png',
					width: '5%',
					x: '55%',
					y: '78%'
				},
				{
					src: 'tree-background-1.png',
					width: '23%',
					x: '69%',
					y: '64%',
					duration: 1000
				}
			],

			//Frame 10
			[
				{
					src: 'rain-cloud4.png',
					width: '35%',
					x: '15%',
					y: '10%'
				},
				{
					src: 'rain-2.png',
					width: '30%',
					x: '18%',
					y: '28%'
				},
				{
					src: 'ground-4.png',
					width: '100%',
					bottom: true
				},
				{
					src: 'sprout-2.png',
					width: '5%',
					x: '56%',
					y: '75%'
				},
				{
					src: 'trees-background.png',
					width: '50%',
					x: '4%',
					y: '60%',
					duration: 1000
				}
			],

			//Frame 11
			[
				{
					src: 'rain-cloud4.png',
					width: '35%',
					x: '-5%',
					y: '10%'
				},
				{
					src: 'rain-2.png',
					width: '30%',
					x: '0%',
					y: '28%'
				},
				{
					src: 'ground-3.png',
					width: '100%',
					bottom: true
				},
				{
					src: 'sprout-3.png',
					width: '5%',
					x: '55%',
					y: '66%'
				},
				{
					src: 'tree-background.png',
					width: '15%',
					x: '15%',
					y: '57%',
					duration: 1000
				}
			],

			//Frame 12
			[
				{
					src: 'ground-2.png',
					width: '100%',
					bottom: true
				},
				{
					src: 'sprout-4.png',
					width: '9%',
					x: '54.5%',
					y: '65%'
				}
			],

			//Frame 13
			[
				{
					src: 'ground-1.png',
					width: '100%',
					bottom: true
				},
				{
					src: 'sprout-5.png',
					width: '12%',
					x: '52%',
					y: '63%'
				}
			],

			//Frame 14
			[
				{
					src: 'ground-1.png',
					width: '100%',
					bottom: true
				},
				{
					src: 'teen-tree.png',
					width: '12%',
					x: '52%',
					y: '33%'
				}
			],

			//Frame 15
			[
				{
					src: 'ground-1.png',
					width: '100%',
					bottom: true
				},
				{
					src: 'mature-tree.png',
					width: '55%',
					x: '31%',
					y: '9%'
				}
			],
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

	preload(args) {
		console.log(args);
		let images = new Array()
		
		for (let i = 0; i < args.length; i++) {
			images[i] = new Image()
			images[i].src = args[i]

		}

		console.log('done- ', images)
		return images
	}

	get imageList() {
		let unq = new Set(this.layers.flat().map(e => e.src));
		return [...unq.values()].sort()
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

		this.preload(this.imageList);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', () => this.onScrollCalculateFrame());
	}

	render() {
		console.log('Current frame:', this.state.frameIndex);
		const activeLayers = this.activeLayers.map(ea => <img src={`img/${ea.src}`} key={ea.src} style={(() => {
			const style = {};
			if (ea.width !== 'fill') {
				ea.x && (style.left = ea.x);
				ea.y && (style.top = ea.y);
				ea.bottom && (style.bottom = 0);
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