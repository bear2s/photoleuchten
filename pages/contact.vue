<template>
  <v-layout row>
    <v-flex xs-12>
      <v-form
        action="https://formspree.io/photoleuchten@yahoo.com"
        method="POST"
        style="max-width: 800px; margin: auto"
        v-model="valid">
        <v-layout row>
          <v-flex xs12>
            <v-text-field
              :label="$t('first_name')"
              name="firstname"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-text-field
              :label="$t('last_name')"
              name="lastname"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-text-field
              :label="$t('email_address')"
              required
              v-model="email"
              :rules="emailRules"
              name="email"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-text-field
              :label="$t('message')"
              name="body"
              required
              v-model="message"
              :rules="messageRules"
              multi-line
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 class="text-xs-right">
            <v-btn
              :disabled="!valid"
              type="submit">{{$t('send')}}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'contact',
    transition: 'slide-left',
    asyncData ({store, route}) {
      return store.dispatch('setLanguageKey', route.name === 'contact' ? 'en' : 'de')
    },
    data () {
      return {
        valid: false,
        message: '',
        messageRules: [
          (v) => !!v || this.$t('required_field')
        ],
        email: '',
        emailRules: [
          (v) => !!v || this.$t('required_field'),
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.$t('enter_valid_email')
        ]
      }
    }
  }
</script>
