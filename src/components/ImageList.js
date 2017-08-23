import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { connect } from 'react-redux'
import { search } from '../actions'
import { ImageItem } from './'

class ImageList extends Component {
  renderImages() {
      return this.props.images.map(image => 
        <ImageItem key={image.title+'_'+image.author_id+'_'+image.date_taken} image={image} />
      );
  }

  render() {
    return (
      <ScrollView>
        {this.renderImages()}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ searchReducer }) => {
  return {
    images: searchReducer.images,
  }
}

export default connect(mapStateToProps, { search })(ImageList)