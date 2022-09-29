export const formatPrice = (amount: number, language = 'pt-BR', currency = 'BRL') => {
  if (!amount) return ''
  return amount
    .toLocaleString(language, { style: 'currency', currency })
    .replace(/^(\D+)/, '$1 ') // add space
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format
export type DateOptionsType = {
  weekday?: 'long' | 'short' | 'narrow'
  year?: 'numeric' | '2-digit'
  month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit'
  day?: 'numeric' | '2-digit'
}

export const formatDate = (
  date: Date | string,
  opts?: {
    lang?: string
    format?: DateOptionsType
  }
) => {
  if (!date) return ''
  return new Date(`${date} `).toLocaleDateString(opts?.lang || 'pt-BR', opts?.format)
}
