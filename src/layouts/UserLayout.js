import React, {Fragment} from 'react';
import {formatMessage} from 'umi/locale';
import DocumentTitle from 'react-document-title';
// eslint-disable-next-line import/no-extraneous-dependencies
import Link from 'umi/link';
import {Icon} from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';

const links = [
  {
    key: 'help',
    title: formatMessage({id: 'layout.user.link.help'}),
    href: '',
  },
  {
    key: 'privacy',
    title: formatMessage({id: 'layout.user.link.privacy'}),
    href: '',
  },
  {
    key: 'terms',
    title: formatMessage({id: 'layout.user.link.terms'}),
    href: '',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 氧帐
  </Fragment>
);

class UserLayout extends React.PureComponent {
  getPageTitle = () => '氧帐';

  render() {
    const {children} = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.lang}>
            {/* 国际化选择语言 */}
            {/* <SelectLang /> */}
          </div>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>氧帐</span>
                </Link>
              </div>
              <div className={styles.desc}>氧帐系统 是一个基于物联网协议，以云平台为系统核心的平台</div>
            </div>
            {children}
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
