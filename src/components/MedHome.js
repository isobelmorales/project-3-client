import React from 'react'

import Footer from './shared/Footer'
import {Link} from 'react-router-dom'

const MedHome = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
		
		<div className="splashPicMed" />

		<div className='boats'>
			
		<h4> Impromptu </h4>
		<div>
		<img src='https://i.imgur.com/RNxsirYm.jpg' alt=''/>
		<Link to=''> Book this boat</Link>
		</div>


		</div>
		<hr/>
		<div className='boats'>
			
			<h4> Optasia </h4>
			<div>
			<img src='https://i.imgur.com/AZgvViAt.jpg' alt=''/>
			<Link to=''> Book this boat</Link>
			</div>
	
	
			</div>
		<hr/>
		<div className='boats'>
			
		<h4> Kingsman </h4>
		<div>
		<img src='https://i.imgur.com/gpQ2ovqt.jpg' alt=''/>
		<Link to=''> Book this boat</Link>
		</div>


		</div>



		<Footer/>
		
		</>


)

}

export default MedHome