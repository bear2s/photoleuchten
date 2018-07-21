<template>
  <v-form
    v-model="valid"
    action="https://formspree.io/photoleuchten@yahoo.com"
    method="POST"
    style="max-width: 800px; margin: auto">
    <v-layout row>
      <v-flex xs12>
        <v-text-field
          :label="$t('first_name')"
          name="firstname"
        />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-text-field
          :label="$t('last_name')"
          name="lastname"
        />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-text-field
          :label="$t('email_address')"
          v-model="email"
          :rules="emailRules"
          required
          name="email"
        />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-textarea
          :label="$t('message')"
          v-model="message"
          :rules="messageRules"
          name="body"
          required
        />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex
        xs12
        class="text-xs-right">
        <v-btn
          :disabled="!valid"
          type="submit">{{ $t('send') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
  export default {
    name: 'ContactForm',
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
    },
    i18n: {
      messages: {
        en: {
          'first_name': 'First name',
          'last_name': 'Last name',
          'email_address': 'Email',
          'message': 'Message',
          'required_field': 'Required field',
          'enter_valid_email': 'Please enter a valid email address'
        },
        de: {
          'first_name': 'Vorname',
          'last_name': 'Nachname',
          'email_address': 'E-Mail',
          'message': 'Nachricht/Anfrage',
          'required_field': 'Pflichtfeld',
          'enter_valid_email': 'Bitte eine gültige E-Mail-Adresse eingeben'
        }
      }
    }
  }
</script>
