import './UrlsList.css';
import UrlsListItem from './UrlsListItem/UrlsListItem';

interface Url {
	id: number;
	user_id: number;
	short_url: string;
	long_url: string;
	description: string;
}

const data = {
	id: 1,
	user_id: 1,
	short_url: 'shortURL',
	long_url: 'longURL',
	description: 'description',
};

const UrlsList = () => {
	return (
		<ul>
			<UrlsListItem data={data} />
			<UrlsListItem data={data} />
			<UrlsListItem data={data} />
		</ul>
	);
};

export default UrlsList;
