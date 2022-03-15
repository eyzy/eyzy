export function debounce(func: any, wait: number, immediate?: boolean) {
  let timeout

  return function executedFunction() {
    // @ts-ignore
    let context = this
    let args = arguments

    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    let callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}