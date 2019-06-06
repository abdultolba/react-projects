import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

class App extends Component {
    render() {
        return (
            <div className="ui container comments">
                <ApprovalCard>
                    <div>
                        <h4>Warning!</h4>
                        Are you sure you want to do this?
                    </div>
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail content="Nice blog post!" timeAgo="Today at 4:45PM" author={faker.name.findName()} />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail content="Interesting read, will definately share!" timeAgo="Today at 2:37PM" author={faker.name.findName()} />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail content="Amazing article, very well written." timeAgo="Yesterday at 7:20PM" author={faker.name.findName()} />
                </ApprovalCard>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));