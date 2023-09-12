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
    const experience = await sanityClient.fetch(query)
    return NextResponse.json({ experience })
}