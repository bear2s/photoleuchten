<template>
  <div class="container">
    <div class=" row middle-xs center-xs contact mdc-theme--dark">
      <form
        action="https://formspree.io/photoleuchten@yahoo.com"
        method="POST">
        <div class="col-xs-12">
          <div class="mdc-textfield mdc-textfield--fullwidth">
            <input type="text"
                   id="firstname_field"
                   name="firstname"
                   :placeholder="$t('first_name')"
                   class="mdc-textfield__input">
            <div class="mdc-textfield__bottom-line"></div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="mdc-textfield mdc-textfield--fullwidth">
            <input type="text"
                   id="lastname_field"
                   name="lastname"
                   :placeholder="$t('last_name')"
                   class="mdc-textfield__input">
            <div class="mdc-textfield__bottom-line"></div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="mdc-textfield mdc-textfield--fullwidth">
            <input type="email"
                   required
                   id="email_field"
                   name="email"
                   :placeholder="$t('email_address')"
                   class="mdc-textfield__input">
            <div class="mdc-textfield__bottom-line"></div>
          </div>
        </div>
        <br/>
        <div class="col-xs-12">
          <div class="mdc-textfield mdc-textfield--fullwidth mdc-textfield--textarea">
            <textarea id="message_field"
                      name="body"
                      required
                      :placeholder="$t('message')"
                      class="mdc-textfield__input"></textarea>
            <div class="mdc-textfield__bottom-line"></div>
          </div>
        </div>
        <div class="col-xs-12">
          <button class="mdc-button mdc-button--raised secondary-filled-button"
                  type="submit">{{$t('send')}}
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    transition: 'slide-left',
    i18n: {
      messages: {
        en: {
          first_name: 'First name',
          last_name: 'Last name',
          email_address: 'Email',
          message: 'Message'
        },
        de: {
          first_name: 'Vorname',
          last_name: 'Nachname',
          email_address: 'E-Mail',
          message: 'Nachricht/Anfrage'
        }
      }
    }
  }
</script>

<style scoped>
  @import '~@material/textfield/dist/mdc.textfield.css';

  .mdc-textfield__input {
    font-family: inherit;
  }

  form {
    width: 100%;
    max-width: 800px;
  }

  form input, form textarea {
    width: 100%;
  }

  form textarea {
    height: 25vh;
    max-height: 400px;
    min-height: 150px;
  }

  form > div {
    margin-bottom: 1rem;
  }
</style>
