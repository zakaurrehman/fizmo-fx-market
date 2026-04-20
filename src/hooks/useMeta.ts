import { useEffect } from 'react'

type OgTags = {
  title?: string
  description?: string
  image?: string
}

type MetaOptions = {
  title?: string
  description?: string
  keywords?: string
  og?: OgTags
}

function setMeta(name: string, content?: string) {
  if (!content) return
  const meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (meta) {
    meta.content = content
  } else {
    const m = document.createElement('meta')
    m.name = name
    m.content = content
    document.head.appendChild(m)
  }
}

function setPropertyMeta(prop: string, content?: string) {
  if (!content) return
  const meta = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null
  if (meta) {
    meta.content = content
  } else {
    const m = document.createElement('meta')
    m.setAttribute('property', prop)
    m.content = content
    document.head.appendChild(m)
  }
}

export default function useMeta(options: MetaOptions = {}) {
  const { title, description, keywords, og } = options

  useEffect(() => {
    if (title) document.title = title

    setMeta('description', description)
    setMeta('keywords', keywords)

    if (og) {
      setPropertyMeta('og:title', og.title || title)
      setPropertyMeta('og:description', og.description || description)
      setPropertyMeta('og:image', og.image)
      setMeta('twitter:card', og.image ? 'summary_large_image' : 'summary')
      setMeta('twitter:title', og.title || title)
      setMeta('twitter:description', og.description || description)
    }
  }, [title, description, keywords, og?.title, og?.description, og?.image])
}
