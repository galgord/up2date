import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { supabase } from "@Utils/supabase";
import { Button, Input } from "@Components/common";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  async function signInWithEmail() {
    setLoadingSignIn(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoadingSignIn(false);
      return Alert.alert(error.message);
    }
    if (data.session) {
      setEmail("");
      setPassword("");
      setLoadingSignIn(false);
    }
  }

  async function signUpWithEmail() {
    setLoadingSignUp(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setLoadingSignUp(false);
      return Alert.alert(error.message);
    }

    if (!session) {
      setLoadingSignUp(false);
      Alert.alert("Please check your inbox for email verification!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          leftIcon={{
            name: "envelope",
            size: 24,
            family: "FontAwesome",
            color: "black",
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          leftIcon={{
            name: "lock",
            size: 24,
            family: "FontAwesome",
            color: "black",
          }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loadingSignIn}
          loading={loadingSignIn}
          onPress={() => signInWithEmail()}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loadingSignUp}
          loading={loadingSignUp}
          onPress={() => signUpWithEmail()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});

export default Auth;
