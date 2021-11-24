import compose from 'compose-function';
import {Container, Content, Text} from 'native-base';
import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {ActivityIndicator, ImageBackground, View} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import {NetworkContext} from '../../containers/context/NetworkContext';
import AccountTypeSlider from '../../components/AccountTypeSlider';
import FixedDeposit from '../../components/FixedDeposit';
import HomeAccountBalance from '../../components/HomeAccountBalance';
import HomeMenus from '../../components/HomeMenus';
import Sliderscreen from '../../components/Sliderscreen';
import TranscationAccordionType from '../../components/TranscationAccordionType';
import UpcomingBillerCard from '../../components/UpcomingBillerCard';
import {fetchHomeData} from '../../store/actions/home/homeAction';
import styles from '../styles/homeStyles';

class Home extends Component {
  static contextType = NetworkContext;
  componentDidMount() {
    SplashScreen.hide();
    this.props.fetchHomeData();
  }
  render() {
    const {t} = this.props;
    let content = (
      <Content>
        <View>
          <ImageBackground
            source={require('../../images/container.png')}
            style={styles.backImage}>
            <Content style={[styles.homeContent, styles.homeView]}>
              <Text style={styles.homeUserNameText}>
                {t('hi')} {this.props.homeData.data.name}!
              </Text>
              <HomeAccountBalance
                balance={this.props.homeData.data.savingBalance}
                currency={this.props.homeData.data.currency}
              />
            </Content>
          </ImageBackground>
          <AccountTypeSlider
            carouselItems={this.props.homeData.data.cardData}
          />

          <HomeMenus />
          <Content style={styles.homeContent}>
            <TranscationAccordionType
              transferData={this.props.homeData.data.jompayData}
            />
          </Content>
          <Content style={styles.homeContent}>
            <UpcomingBillerCard
              billsData={this.props.homeData.data.upcomingBills}
            />
          </Content>
          <Content style={styles.homeContent}>
            <FixedDeposit depositData={this.props.homeData.data.fixedDeposit} />
          </Content>
          <Content style={styles.homeContent}>
            <Sliderscreen
              whatsNewData={this.props.homeData.data.whatsnewBanner}
            />
          </Content>
        </View>
        <View>
          <Text style={styles.center}>
            You are now {this.context.isConnected ? 'online' : 'offline'}
          </Text>
        </View>
      </Content>
    );
    if (
      this.props.homeData.isFetching ||
      this.props.homeData.data.length <= 0
    ) {
      content = (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    return <Container>{content}</Container>;
  }
}

const mapStateToProps = state => {
  return {
    homeData: state,
  };
};
export default compose(
  withTranslation(),
  connect(mapStateToProps, {fetchHomeData}),
)(Home);
