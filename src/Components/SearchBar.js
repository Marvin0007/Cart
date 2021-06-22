import {
    TextField,
    InputAdornment,
    IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const SearchBar = ({ term, searchData, price }) => {
    return (
        <div style={{ justify: "space-between" }}>
            <TextField

                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton disabled={true}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                placeholder="Search Items..."
                onChange={(event) => searchData(event)}
                onFocus={(event) => searchData(event)}
                value={term}
                style={{ marginBlockStart: "2%", marginInlineStart: "2%" }}
                autoComplete="off"

            />
            <span style={{ verticalAlign: "bottom", float: "right" }}>
                <ShoppingCartIcon style={{ verticalAlign: "top", marginRight: "5px" }} />
                ${price.toFixed(2)}
            </span>
        </div>
    )
}

export default SearchBar;