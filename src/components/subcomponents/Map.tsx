import React from "react"

function Map() {
	return (
		<div className="w-full">
			<iframe className="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d46005235.93705622!2d-70.7785469310849!3d-5.563719216078178!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x90f99effb40af535%3A0xd2673dbf02a5b69c!2sLatinoam%C3%A9rica!3m2!1d-4.4420385!2d-61.3268535!5e0!3m2!1ses-419!2sve!4v1654696349768!5m2!1ses-419!2sve" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
		</div>
	)
}

export default Map