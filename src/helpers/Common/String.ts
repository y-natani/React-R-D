export const kanaToHira = (str: string) => {
  return str.replace(/[\u30a1-\u30f6]/g, match => {
    var chr = match.charCodeAt(0) - 0x60
    return String.fromCharCode(chr)
  })
}

export const hiraToKana = (str: string) => {
  return str.replace(/[\u3041-\u3096]/g, match => {
    var chr = match.charCodeAt(0) + 0x60
    return String.fromCharCode(chr)
  })
}

export const toQs = (obj: { [key: string]: any }, url = '') => {
  let qs = []

  if (Object.keys(obj).length) {
    for (const [value, key] of Object.entries(obj)) {
      qs.push(`${value}=${key}`)
    }
  }
  return `${url}?${qs.join('?')}`
}

export const boolToStr = (bool: any) => (bool ? 'true' : 'false')
