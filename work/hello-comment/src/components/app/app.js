import React, {Component} from 'react'
import Add from '../add'
import List from '../list/list'

/**
 * Created by xfzhang on 2017/3/6.
 */
export default class App extends Component {

  constructor (props) {
    super(props)
    //初始化状态
    this.state = {
      comments: []
    }
  }

  componentDidMount () {
    //模拟请求获取数据
    const comments = [
      {username: '赵伟', content: '受不了!!!'},
      {username: '马超', content: '很爽!'}
    ]
    //更新状态
    this.setState({comments})
  }

  render () {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add />
          <List comments={this.state.comments}/>
        </div>
      </div>
    )
  }
}