import React, {Component, PropTypes} from 'react'
import Item from '../item/item'

/**
 * Created by xfzhang on 2017/3/6.
 */
export default class List extends Component {

  render () {
    const {comments} = this.props
    //计算提示文本的显示性
    let display = comments.length===0 ? 'block' : 'none'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <Item key={index} comment={comment}/>)
          }
        </ul>
      </div>
    )
  }
}
List.propTypes = {
  comments: PropTypes.array.isRequired
}