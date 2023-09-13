import { NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`
    *[_type == "experience"] | order(dateStarted desc){
        ...,
        technologies[]->
    }
`

export async function GET(){
    const experience = await sanityClient.fetch({"query": query,config:{
        cache: 'no-store'
    }})
    return NextResponse.json({ experience })
}