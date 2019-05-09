import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from './layout';
import BookPreview from './components/BookPreview';

class ProfileContainer extends Component {

    renderItem ({item, index}) {
        return (
          <BookPreview name={item.title} author={item.author} imageSource={item.imageSource}/>
        );
    }

    render() {
        const { isLoading, currentUser } = this.props;
        return (
            <Profile isLoading={isLoading} currentUser={currentUser} renderItem={this.renderItem}/>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    isLoading: state.auth.currentUserLoading
});

export default connect(mapStateToProps)(ProfileContainer);