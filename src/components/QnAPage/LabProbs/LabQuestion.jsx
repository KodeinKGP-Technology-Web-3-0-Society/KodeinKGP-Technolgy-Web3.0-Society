import React from 'react';
import dataJ from '../../../data/qna/programming-questions.json';
import { useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function LabQuestion() {
	const [flag, setFlag] = React.useState(0);
	const [copy, setCopy] = React.useState(0);
	let arr = [];

	const data = dataJ;
	const param = useParams();
	const topic = param.topic;
	const ind = param.ind;
	
	if (topic == 'labTest') {
		let topicArray = [
		'initialBasics',
		'loops',
		'ArrayAndStrings',
		'functionsAndRecursions',
		'structuresAndPointers',
		'sortingAnd2dArrays',
		'linkedList',
		];
		topicArray.forEach(element => {
		arr = arr.concat(data[element][2].Elements);
		});
	} else {
		arr = data[topic][0].Elements;
	}
	
	const q = arr[ind].Question;
	const sol = arr[ind].Answer;
	
	const handleCopy = () => {
		navigator.clipboard.writeText(sol);
		setCopy(1);
		setTimeout(() => {
		setCopy(0);
		}, 2000);
	};
	
	const fun = () => {
		if (flag === 0) {
		return <></>;
		} else {
		return (
			<div className="relative flex flex-col my-5 mx-5">
			<div className="bg-[#282a36] m-0">
				{copy ? (
				<button className="bg-[#302828] text-white px-4 py-1 cursor-pointer font-normal text-base">
					<span className="pr-2 py-1">
					<ion-icon name="checkmark-sharp"></ion-icon>
					</span>
					copied!
				</button>
				) : (
				<button 
					className="bg-[#302828] text-white px-4 py-1 cursor-pointer font-normal text-base"
					onClick={handleCopy}
				>
					<span className="pr-2 py-1">
					<ion-icon name="clipboard-outline"></ion-icon>
					</span>
					copy code
				</button>
				)}
			</div>
			<SyntaxHighlighter
				language="cpp"
				style={dracula}
				customStyle={{
				padding: '1.9rem',
				margin: '0rem',
				backgroundColor: '#333',
				borderRadius: '10px',
				}}
				wrapLongLines={true}
			>
				{sol}
			</SyntaxHighlighter>
			</div>
		);
		}
	};
	
	const toggleHide = () => {
		const s = document.getElementById('toggleBtn');
		if (flag === 0) {
		s.innerHTML = 'hide solution';
		setFlag(1);
		} else {
		s.innerHTML = 'show solution';
		setFlag(0);
		}
	};
	
	return (
		<div className="font-['Poppins']">
		<div className="bg-[#222] text-white p-5 my-5 mx-4 rounded-xl shadow-md relative font-black text-base">
			<pre className="overflow-x-auto">{q}</pre>
		</div>
		
		<button 
			onClick={toggleHide} 
			id="toggleBtn"
			className="bg-[#00a1d9] text-white px-5 py-2.5 border-none rounded-md text-base cursor-pointer mx-2.5 my-2.5 hover:bg-[#007dab]"
		>
			show solution
		</button>
		
		<div>{fun()}</div>
		
		<button className="bg-[#00a1d9] text-white px-5 py-2.5 border-none rounded-md text-base cursor-pointer mx-2.5 my-2.5 hover:bg-[#007dab]">
			<a
			href="https://www.programiz.com/c-programming/online-compiler/"
			target="_blank"
			rel="noopener noreferrer"
			className="text-white no-underline"
			>
			open online editor
			</a>
		</button>
		</div>
	);
}