export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            )

            let newOrder = null
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                }
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        }
                    } else {
                        return orderItem
                    }
                })
            }
            localStorage.setItem('cart', JSON.stringify(newOrder))
            return {
                ...state,
                order: newOrder,
                alertName: payload.title,
            }
        }
        case 'REMOVE_FROM_BASKET':
            const orderItems = state.order.filter((el) => el.id !== payload.id)
            localStorage.setItem('cart', JSON.stringify(orderItems))
            return {
                ...state,
                order: orderItems
            }
        case 'INCREMENT_QUANTITY':
            const incQuantity = state.order.map((el) => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity + 1
                    return {
                        ...el,
                        quantity: newQuantity,
                    }
                } else {
                    return el
                }
            })
            localStorage.setItem('cart', JSON.stringify(incQuantity))
            return {
                ...state,
                order: incQuantity,
            }
        case 'DECREMENT_QUANTITY':
            const decQuantity = state.order.map((el) => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity - 1
                    return {
                        ...el,
                        quantity: newQuantity >= 0 ? newQuantity : 0,
                    }
                } else {
                    return el
                }
            }).filter((el) => el.quantity > 0)

            localStorage.setItem('cart', JSON.stringify(decQuantity))
            return {
                ...state,
                order: decQuantity,
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'TODDLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }
        default:
            return state
    }
}