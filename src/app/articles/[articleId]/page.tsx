import { NotionAPI } from 'notion-client'

import Head from 'next/head'
import {NotionPage} from './notionpage'

export default async function Page({ params }: { params: { articleId: string } }) { 
    
    const idToTitle = (id: string) => {
        switch(id) {
            case '05d2cd5883ab445aab4ab84c8700cc7b':
                return 'The Cap Set Problem'
            break;
            case '8dcf23fd3b044fd9ab36d92aada5f88d':
                return 'Exploring Space: A Survey of Mathematical Spaces'
            break;
            case 'd4f0c02cb1f0431aa0ef381c739b830d':
                return 'Simplicial Complexes: Giving Shape to Data'
            break;
            case '22e0d206df6046ddbfa517aab17ed970':
                return 'Teaching Cars to Drive with Neuroevolution'
            break;
            case 'b587cacaa6684c7daaecf04bddde794b':
                return 'Building VR Websites'
            break;
            case '4abf2949130a4225a5f921d5f318ab3d':
                return 'In Defense of Hammers without Nails'
            break;
            default:
                return "New Blog Post"
            break;
        }
    }
  
    const notion = new NotionAPI()
    const recordMap = await notion.getPage(params.articleId)


    return (
        <div>
        <head>
        <title>{idToTitle(params.articleId)}</title>
        <meta name = "image" property="og:image" content="https://cdn.aarp.net/content/dam/aarp/travel/trips/2020/08/1140-sunset-at-shenandoah-national-park.jpg"/>
      </head>
            <NotionPage recordMap = {recordMap}/>
        </div>
    )
}