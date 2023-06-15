import { NotionAPI } from 'notion-client'


import {NotionPage} from './notionpage'

export default async function Page({ params }: { params: { articleId: string } }) { 
    
  
    const notion = new NotionAPI()
    const recordMap = await notion.getPage(params.articleId)


    return (
        <div>
            <NotionPage recordMap = {recordMap}/>
        </div>
    )
}