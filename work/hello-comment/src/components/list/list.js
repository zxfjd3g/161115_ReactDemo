import React, {Component, PropTypes} from 'react'
import Item from '../item/item'
import './list.css'

/**
 * Created by xfzhang on 2017/3/6.
 */
export default class List extends Component {


  render () {
    const {comments, remove} = this.props
    const display = comments.length===0 ? 'block' : 'none'
    const liList = comments.map((comment, index) => {
      return <Item key={index} comment={comment} remove={remove} index={index}/>
    })
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {liList}
        </ul>
      </div>
    )
  }
}
List.propTypes = {
  comments: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}