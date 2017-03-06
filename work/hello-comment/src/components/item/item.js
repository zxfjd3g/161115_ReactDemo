import React, {Component, PropTypes} from 'react'

/**
 * Created by xfzhang on 2017/3/6.
 */
export default class Item extends Component {

  render () {
    const {comment} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;">删除</a>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}
Item.propTypes = {
  comment: PropTypes.object.isRequired
}