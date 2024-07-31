import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import { menuItems} from "./data/db"
import useOrder from "./hooks/useOrder"
import Tip from "./components/Tip"

function App() {

  const {order, addItem, removeItem, tip, setTip, placeOrder} = useOrder()

  return (
    <>
    <div></div>
      <header className=" bg-black py-5">
        <h1 className=" text-center text-4xl text-white">Calculadora de consumo y propina</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menú</h2>
          <div className=" space-y-3 mt-10">
          {menuItems.map(item =>(
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}/>
          ))}
          </div>
        </div>

        <div className=" bg-amber-400 border border-dashed p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
          <>
          
          <OrderContents
          order={order}
          removeItem={removeItem}
          />
          <Tip
          setTip={setTip}
          tip={tip}
          />
          <OrderTotals 
          order={order}
          tip={tip}
          placeOrder={placeOrder}/>
          </>
          ) : (<p className=" text-center">La orden esta vacia</p>)}
        </div>
      </main>
    </>
  )
}

export default App
