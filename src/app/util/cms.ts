export type Article = {
	title: string;
	notionId: string;
};

export const SPOTIFYEMBEDLINKS = [
	'https://open.spotify.com/embed/track/1kq9lzEHoY3p8naHWpqNlh?utm_source=generator',
	'https://open.spotify.com/embed/episode/1etIR5eEvpFKsWihW2cax1?utm_source=generator',
	'https://open.spotify.com/embed/track/2S7vZHfK6QTtK30pzAqBLP?utm_source=generator',
];

export const ALL_ARTICLES: Article[] = [
	{
		title: `Learnings from March 24'`,
		notionId: 'c5c7824629384a358f8a4a4add2181da',
	},
	{
		title: 'The Line Between Sales and Customer Discovery Only Exists at Scale',
		notionId: '36eb069cdedf40e6983ca38f341fb172',
	},
	{
		title: 'A Short Argument For Faith',
		notionId: 'fee7bfd395bf43f482ce9cdd9bf6f992',
	},
	{
		title: 'The Cap Set Problem',
		notionId: '05d2cd5883ab445aab4ab84c8700cc7b',
	},
	{
		title: 'Let Yourself be Embraced',
		notionId: 'e84cb459d2cf49b8934b765fcbc426f5',
	},
	{
		title: 'The First Ad I Ever Served',
		notionId: 'd89b4efb5dbc438a9d5a05c4968b5518',
	},
	{
		title: 'A Survey of Mathematical Spaces',
		notionId: '8dcf23fd3b044fd9ab36d92aada5f88d',
	},
	{
		title: 'Simplicial Complexes: Giving Shape to Data',
		notionId: 'd4f0c02cb1f0431aa0ef381c739b830d',
	},
	{
		title: 'In Defense of Hammers In Search of Nails',
		notionId: '4abf2949130a4225a5f921d5f318ab3d',
	},
	{
		title: 'Teaching Cars to Drive with Neuroevolution',
		notionId: '22e0d206df6046ddbfa517aab17ed970',
	},
	{
		title: 'Building VR Websites in Javascript',
		notionId: 'b587cacaa6684c7daaecf04bddde794b',
	},
];

export function getTitleFromId(id: string): string {
	const allBlogs = ALL_ARTICLES;
	const matchingTitle = allBlogs.filter((article) => article.notionId === id);
	if (matchingTitle) {
		return matchingTitle[0].title;
	}
	return 'Error';
}
