import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Videofooter = ({name, description, music}) => {
	return (
		<div className="videoFooter">
			<div className="videoFooter_text">
				<h3>@{name}</h3>
				<p>{description}</p>
				<div className="videoFooter_music" >
					<MusicNoteIcon className="videoFooter_icon" />
					<div className="videoFooterMusic_text">
						<p>{music}</p>
					</div>
				</div>
			</div>
			<img className="videoFooter_record" 
				src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png" 
				alt="Imagem de um vinil girando"
				 />
		</div>
	)
}

export default Videofooter