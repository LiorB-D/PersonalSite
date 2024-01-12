import { NotionAPI } from 'notion-client';
import { getTitleFromId } from '@/app/util/cms';
import { NotionPage } from './notionpage';

export default async function Page({
	params,
}: {
	params: { articleId: string };
}) {
	const notion = new NotionAPI();
	const recordMap = await notion.getPage(params.articleId);
	const articleTitle = getTitleFromId(params.articleId);

	return (
		<div>
			<head>
				<title>{articleTitle}</title>
				<meta property="og:title" content={articleTitle} />
				<meta property="og:description" content={articleTitle} />
				<meta
					name="og:image"
					property="og:image"
					content="https://cdn.aarp.net/content/dam/aarp/travel/trips/2020/08/1140-sunset-at-shenandoah-national-park.jpg"
				/>
				<meta
					name="twitter:image"
					property="twitter:image"
					content="https://cdn.aarp.net/content/dam/aarp/travel/trips/2020/08/1140-sunset-at-shenandoah-national-park.jpg"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					name="twitter:domain"
					content={`liorbd.me/articles/${params.articleId}`}
				/>
				<meta property="twitter:url" name="twitter:url" content="" />
				<meta
					name="twitter:title"
					property="twitter:title"
					content={articleTitle}
				/>
				<meta
					name="twitter:description"
					property="twitter:description"
					content={articleTitle}
				/>
			</head>
			<NotionPage recordMap={recordMap} />
		</div>
	);
}
