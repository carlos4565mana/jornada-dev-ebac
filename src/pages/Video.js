import React,{useRef, useState} from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'


import './Video.css'

function Video({likes, messages, shares, name, description, music, url}) {
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
				src={url}
				loop
			>
			</video>
			<VideoSidebar 
				likes={likes}
				messages={messages}
				shares={shares}
			/>
			<VideoFooter 
				name={name}
				description={description}
				music={music}

			/>
		
		</div>
	)
}

export default Video