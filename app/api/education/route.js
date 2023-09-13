import { NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`
    *[_type == "education"] | order(dateStarted desc){
        ...,
    }
`

export async function GET(){
    const education = await sanityClient.fetch({"query": query,config:{
        cache: 'no-store'
    }})
    return NextResponse.json({ education })
}