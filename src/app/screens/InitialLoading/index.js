import { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as Routes from '../../../constants/routes';
import WithLoading from '../../components/WithLoading';
import AuthService from '../../../services/AuthService';
import AuthActions from '../../../redux/auth/actions';

class InitialLoading extends PureComponent {

    static async getDerivedStateFromProps(props) {
        const { currentUser, navigation, initialLoading } = props;
        if (!initialLoading) {
            navigation.replace(currentUser ? Routes.Home : Routes.Login);
        }
        return null;
    }
    
    state = {};
    
    render() {
        return null;
    }
}
  
const mapStateToProps = store => ({
    initialLoading: store.initialLoading,
    currentUser: store.currentUser
});

export default connect(mapStateToProps)(WithLoading(props => props.initialLoading)(InitialLoading))

