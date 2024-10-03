import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../state/store'
import { useGetOrdersQuery } from '../state/pizzaApi'

export default function OrderList() {
  const dispatch = useDispatch()
  const { data: orders } = useGetOrdersQuery()
  const filter = useSelector(state => state.pizza.filter)

  const filteredOrders = orders.filter(order => filter === 'All' || order.size === filter)
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          filteredOrders.map(order => {
            return (
              <li key={order.id}>
                <div>
                  {order.fullname} ordered a {order.size} pizza with {order.toppings.join(',')}
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = `button-filter${size === 'All' ? ' active' : ''}`
            return <button
              onClick={() => dispatch(setFilter(size))}
              className={className}
              key={size}>{size}</button>
          })
        }
      </div>
    </div>
  )
}
