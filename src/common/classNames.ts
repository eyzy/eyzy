const hasOwn = {}.hasOwnProperty

export function cn(...names: any[]): string {
  const result: string[] = []

  for (let i = 0; i < names.length; i++) {
    const item: any = names[i]

    if (!item) {
      continue
    }

    const type: string = typeof item

    if (type === 'string' || type === 'number') {
      result.push(item)
    } else if (Array.isArray(item) && item.length) {
      result.push(cn.apply(null, item))
    } else if ('object' === typeof item) {
      for (let key in item) {
        if (hasOwn.call(item, key) && item[key]) {
          result.push(key)
        }
      }
    } else {
      result.push(item)
    }
  }

  return result.join(' ')
}