import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const CartList = ({ Cart, removeItem }) => {
    return (
        <div style={{ marginTop: "5%" }}>
            <h3>Cart Items:</h3>
            {Cart && Cart.length > 0 ? Cart.map((a, i) => <span key={i} style={{ display: "inline-block", backgroundColor: a.color, margin: "10px 5px", padding: "5px", paddingLeft: "16px", paddingBottom: "7px", borderRadius: "12px", fontSize: "18px", color: "white", whiteSpace: "nowrap" }}>{a.name}<IconButton onClick={() => removeItem(a, i)} style={{ height: "20px", width: "20px", margin: 0, color: "white" }}><CloseIcon style={{ fontSize: "13px", marginTop: "-3px" }} /></IconButton></span>) : <h5>Empty Cart, Add Items from List</h5>}
        </div>
    )
}

export default CartList;