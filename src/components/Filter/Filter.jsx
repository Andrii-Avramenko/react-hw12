import { Component } from "react"

import { FilterDiv } from "./Filter.styled";

class Filter extends Component {
    
    state = {
        filter: "",
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value
        })
        this.props.onChange(value)
    }

    render() {
        return (
            <FilterDiv>
                <label htmlFor="filter">Find contacts by name</label>
                <input type="text" value={this.state.filter} name="filter" onChange={this.handleChange}/>
            </FilterDiv>
        )
    }
}

export default Filter