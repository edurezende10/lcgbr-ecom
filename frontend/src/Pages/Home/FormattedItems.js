import Data from '../../services/data'

const products=Data



let items = []
products.forEach((product) => {
  const { id, title, price } = product

  items.push({
    item_id: id,
    item_name: title,
    item_list_name:"Home Product",
    price: price
  })   
})
export default items
