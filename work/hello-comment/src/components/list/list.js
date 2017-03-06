import React, {Component, PropTypes} from 'react'
import Item from '../item/item'
import './list.css'

/**
 * Created by xfzhang on 2017/3/6.
 */
export default class List extends Component {


  render () {
    const {comments, remove} = this.props
    //计算提示文本的显示性
    let display = comments.length===0 ? 'block' : 'none'
    const items = comments.map((comment, index) => {
      const itemProps = {
        key: index,
        comment,
        remove,
        index
      }
      return <Item {...itemProps}/>
    })
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {items}
        </ul>
      </div>
    )
  }
}
List.propTypes = {
  comments: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}