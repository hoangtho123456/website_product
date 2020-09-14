import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/modal';
import Aux from '../Aux__/aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    _isMounted = false;

    componentWillMount() {
      this._isMounted = true;
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      // console.log('Will mounted', this.state.error, this._isMounted);
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        if (this._isMounted) {
          this.setState({error: error});
        }
        // console.log('Will mounted error', this.state.error, this._isMounted);
      });
    }

    componentWillUnmount() {
      // console.log('Will Unmounted', this.reqInterceptor, this.resInterceptor, this._isMounted);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
      this._isMounted = false;
    }

    errorConfirmHandler = () => {
      this.setState({error: null});
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error}
          modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;
