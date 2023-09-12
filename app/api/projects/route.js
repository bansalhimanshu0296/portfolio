import { NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`
*[_type == "project"] | order(_updatedAt desc){
    ...,
    technologies->
}
`

export async function GET(){
    const projects = await sanityClient.fetch(query)
    return NextResponse.json({ projects })
}