import React, { useEffect, useState } from 'react';
import { DungeonsAndDragonsCharacterAbi } from '../../abis/types';
import { BigNumber } from '@ethersproject/bignumber';
import { NFT_ADDRESSES } from '../../constants/addresses';
import ABI from '../../abis/DungeonsAndDragonsCharacter.abi.json';
import useContract from '../../hooks/useContract';

interface CounterProps {
	transaction?: string;
}

export default function Counter(props: CounterProps) {
	const contract = useContract<DungeonsAndDragonsCharacterAbi>(
		NFT_ADDRESSES,
		ABI
	);
	const [numberOfCharacters, setNumberOfCharacters] = useState<number | null>(
		null
	);

	useEffect(() => {
		const getNumberOfCharacters = async () => {
			if (!!contract) {
				const _numberOfCharacters: BigNumber =
					await contract.getNumberOfCharacters();
				setNumberOfCharacters(_numberOfCharacters.toNumber());
			}
		};

		getNumberOfCharacters();
	}, [contract, props.transaction]);

	return (
		<div>
			{!!numberOfCharacters && (
				<p className='text'>Number of characters: {numberOfCharacters}</p>
			)}
		</div>
	);
}
