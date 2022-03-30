import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import * as Images from '../../Assets/Image';
import Colors from './Colors';

const SectionText = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

function UsersFlex() {
  return (
    <View>
      <View style={styles.imageBorder}>
        <Image
          source={Images.Users}
          resizeMode="contain"
          style={styles.image}
        />
        <SectionText title="Group Chat one 😄🙏🙏" />
        <View style={{marginTop: 25}}>
          <SectionText title="+1234567890: The day is bright!" />
          <Text
            style={{
              fontSize: 14,
              color: Colors.green,
              marginLeft: 333,
              marginTop: -58,
            }}>
            Today
          </Text>
          <View
            style={{
              marginLeft: 345,
              marginTop: 1,
              marginBottom: -45,
              borderRadius: 200,
              backgroundColor: Colors.green,
              width: 20,
              height: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: Colors.dark,
                alignSelf: 'center',
              }}>
              22
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            source={Images.User}
            resizeMode="contain"
            style={styles.image}
          />
          <SectionText title="Alice" />
          <View style={{marginTop: 25}}>
            <SectionText title="Hey! Whatsup?" />
            <Text
              style={{
                fontSize: 14,
                color: Colors.green,
                marginLeft: 333,
                marginTop: -58,
              }}>
              Today
            </Text>
            <View
              style={{
                marginLeft: 345,
                marginTop: 1,
                marginBottom: -45,
                borderRadius: 200,
                backgroundColor: Colors.green,
                width: 20,
                height: 20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.dark,
                  alignSelf: 'center',
                }}>
                2
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            source={Images.UserS}
            resizeMode="contain"
            style={styles.image}
          />
          <SectionText title="Alexa" />
          <View style={{marginTop: 25}}>
            <SectionText title="It's time!" />
            <Text
              style={{
                fontSize: 14,
                color: Colors.green,
                marginLeft: 333,
                marginTop: -58,
              }}>
              Today
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            source={Images.UserF}
            resizeMode="contain"
            style={styles.image}
          />
          <SectionText title="Group Chat one 0 one 😄🙏🙏" />
          <View style={{marginTop: 25}}>
            <SectionText title="+1234567890: The day is bright!" />
            <Text
              style={{
                fontSize: 14,
                color: Colors.green,
                marginLeft: 315,
                marginTop: -58,
              }}>
              Yesterday
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            source={Images.UserLogo}
            resizeMode="contain"
            style={styles.image}
          />
          <SectionText title="Coding Camp 💻" />
          <View style={{marginTop: 25}}>
            <SectionText title="+1234567890: Oh! one bug down" />
            <Text
              style={{
                fontSize: 14,
                color: Colors.green,
                marginLeft: 315,
                marginTop: -58,
              }}>
              Yesterday
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            source={Images.UserU}
            resizeMode="contain"
            style={styles.image}
          />
          <SectionText title="Simeon" />
          <View style={{marginTop: 25}}>
            <SectionText title="Hey!" />
            <Text
              style={{
                fontSize: 14,
                color: Colors.green,
                marginLeft: 312,
                marginTop: -58,
              }}>
              21/03/2022
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            source={Images.UserF}
            resizeMode="contain"
            style={styles.image}
          />
          <SectionText title="Group Chat one 😄🙏🙏" />
          <View style={{marginTop: 25}}>
            <SectionText title="+1234567890: The day is bright!" />
            <Text
              style={{
                fontSize: 14,
                color: Colors.titleColor,
                marginLeft: 310,
                marginTop: -58,
              }}>
              25/03/2022
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            source={Images.Userb}
            resizeMode="contain"
            style={styles.image}
          />
          <SectionText title="Group Chat one 😄🙏🙏" />
          <View style={{marginTop: 25}}>
            <SectionText title="+1234567890: The day is bright!" />
            <Text
              style={{
                fontSize: 14,
                color: Colors.green,
                marginLeft: 310,
                marginTop: -58,
              }}>
              11/03/2022
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            source={Images.User}
            resizeMode="contain"
            style={styles.image}
          />
          <SectionText title="Group Chat one 😄🙏🙏" />
          <View style={{marginTop: 25}}>
            <SectionText title="+1234567890: The day is bright!" />
            <Text
              style={{
                fontSize: 14,
                color: Colors.titleColor,
                marginLeft: 315,
                marginTop: -58,
              }}>
              1/03/2022
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <Image
              source={Images.UserLogo}
              resizeMode="contain"
              style={styles.image}
            />
            <SectionText title="Group Chat one 😄🙏🙏" />
            <View style={{marginTop: 25}}>
              <SectionText title="+1234567890: The day is bright!" />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.green,
                  marginLeft: 315,
                  marginTop: -58,
                }}>
                1/03/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <Image
              source={Images.User}
              resizeMode="contain"
              style={styles.image}
            />
            <SectionText title="Group Chat one 😄🙏🙏" />
            <View style={{marginTop: 25}}>
              <SectionText title="+1234567890: The day is bright!" />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.titleColor,
                  marginLeft: 315,
                  marginTop: -58,
                }}>
                1/03/2022
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBorder: {
    backgroundColor: Colors.bodyDark,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 200,
    marginLeft: 20,
    marginTop: 10,
  },
  sectionContainer: {
    marginTop: -45,
    marginLeft: 62,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 14,
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default UsersFlex;
