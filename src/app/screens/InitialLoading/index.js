import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import * as Routes from '../../../constants/routes';
import WithLoading from '../../components/WithLoading';

class InitialLoading extends PureComponent {

    static getDerivedStateFromProps(props) {
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
    initialLoading: store.auth.initialLoading,
    currentUser: store.auth.currentUser
});

const enhance = compose(
    connect(mapStateToProps),
    WithLoading(props => props.initialLoading)
);

export default enhance(InitialLoading);

