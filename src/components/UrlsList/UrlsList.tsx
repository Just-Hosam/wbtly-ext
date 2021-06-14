import { useState, useEffect } from 'react';
import axios from 'axios';

import UrlsListItem from './UrlsListItem/UrlsListItem';

import './UrlsList.css';

interface Url {
	id: number;
	user_id: number;
	short_url: string;
	long_url: string;
	description: string;
}

const UrlsList = () => {
	const userId = 3;
	const [urlsData, setUrlsData] = useState<Url[]>([]);

	useEffect(() => {
		axios
			.get(`http://www.wbtly.ca/users/${userId}/urls`)
			.then((res) => setUrlsData(res.data))
			.catch((err: Error) => console.log('Error at useEffect in UrlsList', err));
	}, [userId]);

	const UrlsComponents = urlsData.map((url, urlIdx) => <UrlsListItem key={urlIdx} data={url} />);

	return <ul>{UrlsComponents}</ul>;
};

export default UrlsList;
