import React,{useRef, useState} from 'react'
import VideoFooter from './components/footer/VideoFooter'


import './Video.css'

function Video() {
	const[play, setPlay] = useState(false)
	const videoref = useRef(null)

	function handleStart(){
	
		if(play){
			videoref.current.pause()
			setPlay(false)
		}else{
			videoref.current.play()
			setPlay(true)
		}
	}
	return (
		<div className="video">
			<video 
				className="video__player" 
				ref={videoref}
				onClick={handleStart}
				src="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/brecker2.mp4?alt=media&token=5493f40a-3b0d-4c19-b5dd-a9016cc5a6d1"
				loop
			>
			</video>
			<VideoFooter />
		
		</div>
	)
}

export default Video