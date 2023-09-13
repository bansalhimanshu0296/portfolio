import { NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`
    *[_type == "skill"] | order(progress desc)
`

export async function GET(){
    const skills = await sanityClient.fetch({"query": query,config:{
        cache: 'no-store'
    }})
    return NextResponse.json({ skills })
}