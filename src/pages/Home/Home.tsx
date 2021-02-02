import React from 'react';
import { useEthers } from '@usedapp/core';
import Account from '../../components/Account/Account';
import './Home.css';

export default function Home() {
	const { active } = useEthers();

	return (
		<div className='home'>
			{!active ? (
				<>
					<p className='text'>Error Page</p>
				</>
			) : (
				<Account />
			)}
		</div>
	);
}
