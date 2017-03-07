/**
 * Created by xfzhang on 2017/3/7.
 */
import React, {Component, PropTypes} from 'react'

class Search extends Component {

  search = () => {
    const searchName = this.refs.searchName.value.trim()
    if(searchName) {
      //将searchName交给app
      this.props.setSearchName(searchName)
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="enter the name you search" ref="searchName"/>
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}
Search.propTypes = {
  setSearchName: PropTypes.func.isRequired
}


export default Search

