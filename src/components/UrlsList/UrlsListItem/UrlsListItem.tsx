import { CopyToClipboard } from 'react-copy-to-clipboard';

import './UrlsListItem.css';

import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';

interface Props {
	data: Url;
}

interface Url {
	id: number;
	user_id: number;
	short_url: string;
	long_url: string;
	description: string;
}

const UrlsListItem = (props: Props) => {
	return (
		<li>
			{props.data.description && <p>{props.data.description}</p>}
			{!props.data.description && (
				<div className="urls-cont">
					<p>{props.data.short_url}</p>
					<span>{props.data.long_url}</span>
				</div>
			)}
			<CopyToClipboard text={props.data.short_url}>
				<IconButton aria-label="copy">
					<FileCopyIcon />
				</IconButton>
			</CopyToClipboard>
		</li>
	);
};

export default UrlsListItem;
