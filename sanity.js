import createImageUrlBuilder from '@sanity/image-url'
import SanityClient from 'next-sanity-client';


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const config = {
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    // useCdn: process.env.NODE_ENV === "production", // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
    useCdn: false
}

export const sanityClient = new SanityClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)