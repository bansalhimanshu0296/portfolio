import { NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`
    *[_type == "social"] | order(_createdAt asc)
`

export async function GET(){
    const socials = await sanityClient.fetch({"query": query,config:{
        cache: 'no-store'
    }})
    return NextResponse.json({ socials })
}