import { NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`
    *[_type == "pageInfo"][0]
`

export async function GET(){
    const pageInfo = await sanityClient.fetch({"query": query,config:{
        cache: 'no-store'
    }})
    return NextResponse.json({ pageInfo })
}