import Parser from 'rss-parser'

export interface SubstackPost {
    title: string
    link: string
    pubDate: string
    content: string
    contentSnippet: string
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
    const parser = new Parser({
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
    })
    try {
        const feed = await parser.parseURL('https://andreforsyth.substack.com/feed')
        return feed.items.map((item: any) => ({
            title: item.title || '',
            link: item.link || '',
            pubDate: item.pubDate || '',
            content: item.content || '',
            contentSnippet: item.contentSnippet || '',
        })) as SubstackPost[]
    } catch (error) {
        console.error('Error fetching Substack feed:', error)
        return []
    }
}
