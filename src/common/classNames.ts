export function cn(...names: any[]): string {
  const result: string[] = []

  for (let i = 0; i < names.length; i++) {
    const item: any = names[i]

    if (!item) {
      continue;
    }

    if (Array.isArray(item) && item.length) {
      result.push(cn.apply(null, item))
    } else if ('object' === typeof item) {
      for (let [key, value] of item) {
        if (value) {
          names.push(key)
        }
      }
    } else {
      result.push(item)
    }
  }

  return result.join(' ')
}