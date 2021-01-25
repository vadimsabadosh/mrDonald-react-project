
export const totalPriceItems = order => order.price * order.count;

export function formatCurrency(param) {  
    return param.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB' })
} 