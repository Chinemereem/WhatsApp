/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import Colors from './Colors';
import HeaderText from '../../common/Text';
import * as Images from '../../Assets/Image';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.background]}>
      <View>
        <Text style={styles.headerStyle}>WhatsApp</Text>
      </View>
      <View style={styles.listItemsView}>
        <Image
          source={Images.UserCam}
          resizeMode="contain"
          style={styles.image}
        />
        <HeaderText title="CHATS" />

        <HeaderText title="STATUS" />
        <HeaderText title="CALLS" />
      </View>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.textStyle}>Hide Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: -5,
    paddingTop: 36,
    paddingHorizontal: 32,
    backgroundColor: Colors.dark,
  },
  listItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',

    marginLeft: -128,
    marginBottom: -192,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: -22,
    marginTop: 12,
  },
  headerStyle: {
    marginTop: -14,
    marginLeft: -18,
    fontFamily: 'Helvetica',
    color: Colors.hColor,
  },
});

export default Header;
