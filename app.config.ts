import * as dotenv from 'dotenv'
import { ConfigContext, ExpoConfig } from 'expo/config'
import packageJson from './package.json'
import parseEnvFile from './scripts/parse-env'

const path = require('path')
dotenv.config({ path: path.join(__dirname, `./.env`) })

const envKeys = parseEnvFile(path.join(__dirname, `./.env`))

const BUNDLE_ID = process.env.APP_ID ?? 'com.gig50.up2date.dev'

const ENVIRONMENT = process.env.ENVIRONMENT ?? 'staging'
const BUILD_VERSION = packageJson.version
const BUILD_NUMBER = process.env.BUILD_NUMBER ?? '1'

const config = ({ config: _ }: ConfigContext): ExpoConfig => {
  return {
    name: 'up2date',
    slug: 'up2date',
    version: BUILD_VERSION,
    scheme: 'com.up2date.app',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      buildNumber: BUILD_NUMBER,
      bundleIdentifier: 'com.up2date.app',
    },
    android: {
      versionCode: parseInt(BUILD_NUMBER, 10),
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    extra: {
      env: envKeys.reduce((acc, key) => {
        return { ...acc, [key]: process.env[key] }
      }, {}),
      test: false,
      eas: {
        projectId: '022b8b95-52da-4280-a934-91da345d5ced',
      },
      ENVIRONMENT,
    },
    plugins: [
      'expo-router',
      'expo-secure-store',
      [
        'expo-font',
        {
          fonts: [
            'assets/fonts/MontserratAlternates-Bold.ttf',
            'assets/fonts/MontserratAlternates-Regular.ttf',
            'assets/fonts/MontserratAlternates-SemiBold.ttf',
            'assets/fonts/MontserratAlternates-Medium.ttf',
          ],
        },
      ],
    ],
    experiments: {
      tsconfigPaths: true,
    },
    owner: "up2date"
  }
}

export default config
