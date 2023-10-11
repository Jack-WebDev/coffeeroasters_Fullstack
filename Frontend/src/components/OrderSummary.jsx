import Button from "./Button"

function OrderSummary() {
  return (
    <div>
        <div>
            <h2>Order Summary</h2>
            <div>
                <p>I drink my coffee __, with a __ type of bean. __, sent to me __.</p>
            </div>
        </div>

        <Button>Create my plan!</Button>

    </div>
  )
}

export default OrderSummary