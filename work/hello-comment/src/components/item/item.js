import React, {Component, PropTypes} from 'react'
import './item.css'

/**
 * Created by xfzhang on 2017/3/6.
 */
export default class Item extends Component {

  deleteComment = () => {
    const {remove, index, comment} = this.props
    if(confirm(`确定删除${comment.username}的评论吗?`)) {
      remove(index)
    }
  }

  render () {
    const {comment} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.deleteComment}>删除</a>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}

Item.propTypes = {
  comment: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}