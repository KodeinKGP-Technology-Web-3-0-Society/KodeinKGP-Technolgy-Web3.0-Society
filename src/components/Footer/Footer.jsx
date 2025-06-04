import React from 'react'
import Logo from '../../assets/images/kik-final-logo.png'

export default function Footer() {
	return (
		<div
			id="footer"
			className="bg-transparent flex flex-wrap justify-between items-center text-left mt-8 text-white font-[Poppins] border border-[#01011b] border-t-[#3f3e45]"
		>
			<div className="p-4 my-4 mx-10 sm:mx-4" id="footerItem1">
				<div className="flex items-center mb-2">
					<img src={Logo} alt="KiK Logo" id="KiKLogo" className="w-[50px]" />
					<h2 className="mt-2 ml-2 text-lg font-semibold">KodeinKGP</h2>
				</div>
				<div className="mt-4">
					<p className="text-sm">
						Indian Institute of Technology Kharagpur,
						<br />
						West Bengal - 721302
					</p>
				</div>
				<div className="my-8 flex flex-wrap">
					<a className="mr-4 my-2" target="_blank" href="https://www.facebook.com/kodeinkgp?mibextid=ZbWKwL" rel="noreferrer">
						<ion-icon size="large" name="logo-facebook" class="text-white"></ion-icon>
					</a>
					<a className="mr-4 my-2" target="_blank" href="https://www.instagram.com/kodeinkgp_iitkgp?igsh=cmhyMXM3YTA5YzZm" rel="noreferrer">
						<ion-icon size="large" name="logo-instagram" class="text-white"></ion-icon>
					</a>
					<a className="mr-4 my-2" target="_blank" href="https://www.linkedin.com/company/kodeinkgp/" rel="noreferrer">
						<ion-icon size="large" name="logo-linkedin" class="text-white"></ion-icon>
					</a>
					<a className="mr-4 my-2" target="_blank" href="https://medium.com/@kodeinkgp" rel="noreferrer">
						<ion-icon size="large" name="logo-medium" class="text-white"></ion-icon>
					</a>
					<a className="mr-4 my-2" target="_blank" href="https://chat.whatsapp.com/IFt69sSqZsu7FlRWl3EIbk" rel="noreferrer">
						<ion-icon size="large" name="logo-whatsapp" class="text-white"></ion-icon>
					</a>
				</div>
			</div>

			<div className="p-4 my-4 mx-10 sm:mx-4" id="footerItem2">
				<div className="font-bold text-lg pb-4" id="footerItemElement1">Blockchain</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/watch?v=gyMwXuJrbJQ" target="_blank" rel="noopener noreferrer">
						freeCodeCamp
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/@CodeEater21/videos" target="_blank" rel="noopener noreferrer">
						Code Eater
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/@WhiteboardCrypto" target="_blank" rel="noopener noreferrer">
						Whiteboard Crypto
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/@Finematics" target="_blank" rel="noopener noreferrer">
						Finematics
					</a>
				</div>
			</div>

			<div className="p-4 my-4 mx-10 sm:mx-4" id="footerItem3">
				<div className="font-bold text-lg pb-4" id="footerItemElement1">Machine Learning</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/@Deeplearningai" target="_blank" rel="noopener noreferrer">
						DeepLearningAI
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/@SirajRaval/about" target="_blank" rel="noopener noreferrer">
						Siraj Raval
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/@sentdex/playlists" target="_blank" rel="noopener noreferrer">
						sentdex
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/@coreyms/about" target="_blank" rel="noopener noreferrer">
						Corey Schafer
					</a>
				</div>
			</div>

			<div className="p-4 my-4 mx-10 sm:mx-4" id="footerItem4">
				<div className="font-bold text-lg pb-4" id="footerItemElement1">Web Development</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" target="_blank" rel="noopener noreferrer">
						CodeWithHarry
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n" target="_blank" rel="noopener noreferrer">
						Apna College
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G" target="_blank" rel="noopener noreferrer">
						net ninja
					</a>
				</div>
				<div className="my-2">
					<a className="no-underline text-[wheat]" href="https://www.youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU" target="_blank" rel="noopener noreferrer">
						Traversy Media
					</a>
				</div>
			</div>
		</div>
	)
}
