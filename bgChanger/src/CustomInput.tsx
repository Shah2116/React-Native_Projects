import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  renderForm() {
    if (this.state.selectedOption === 'yes') {
      return (
        <View style={styles.formContainer}>
          <Text>Yes Form:</Text>
          {/* Your Yes Form Components Here */}
        </View>
      );
    } else if (this.state.selectedOption === 'no') {
      return (
        <View style={styles.formContainer}>
          <Text>No Form:</Text>
          {/* Your No Form Components Here */}
        </View>
      );
    }

    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="yes"
            status={this.state.selectedOption === 'yes' ? 'checked' : 'unchecked'}
            onPress={() => this.setState({ selectedOption: 'yes' })}
          />
          <Text style={styles.buttonText}>Yes</Text>
        </View>

        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="no"
            status={this.state.selectedOption === 'no' ? 'checked' : 'unchecked'}
            onPress={() => this.setState({ selectedOption: 'no' })}
          />
          <Text style={styles.buttonText}>No</Text>
        </View>

        {this.renderForm()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 8,
  },
  formContainer: {
    marginTop: 20,
  },
});

export default CustomInput;
