import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';


const DataList = ({ Data, addItem }) => {
    return (
        <div style={{ marginTop: "5%" }}>
            <h3>List Of Items:</h3>
            {Data && Data.length > 0 ? Data.map(a => <span key={a.key} style={{ display: "inline-block", backgroundColor: a.color, margin: "10px 5px", padding: "5px", paddingLeft: "20px", paddingBottom: "7px", borderRadius: "12px", fontSize: "16px", color: "white", whiteSpace: "nowrap" }}>{a.name}<IconButton onClick={() => addItem(a)} style={{ height: "20px", width: "20px", margin: 0, color: "white" }}><AddIcon style={{ fontSize: "13px", marginTop: "-3px" }} /></IconButton></span>) : <h5>Waiting For Items To Load...</h5>}
        </div>
    )
}

export default DataList;