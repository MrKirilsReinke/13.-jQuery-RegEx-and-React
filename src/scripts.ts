import $ from 'jquery';
import 'jquery-validation';

declare global {
  interface JQuery {
    validate: any;
  }
}

declare global {
  interface JQueryStatic {
    validator: any;
  }
}

$(() => {
  $.validator.addMethod('strongPassword', function (value: string, element: HTMLElement): boolean {
    return this.optional(element)
    || value.length >= 8
    && /\d/.test(value)
    && /[a-z]/i.test(value);
  }, 'Password must be at least 8 characters long and contain at least one number and one char');

  $.validator.addMethod('noWhiteSpace', function (value: string, element: HTMLElement): boolean {
    return this.optional(element) || /^\S+$/i.test(value);
  }, 'No white spaces!');

  $.validator.addMethod('lettersOnly', function (value: string, element: HTMLElement): boolean {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, 'Letters only!');

  const form = $('.js-form');
  form.validate({
    rules: {
      username: {
        required: true,
        noWhiteSpace: true,
      },
      name: {
        required: true,
        noWhiteSpace: true,
        lettersOnly: true,
      },
      surname: {
        required: true,
        noWhiteSpace: true,
        lettersOnly: true,
      },
      password: {
        required: true,
        strongPassword: true,
      },
      password2: {
        required: true,
        equalTo: '.js-password',
      },
      email: {
        required: true,
        email: true,
        noWhiteSpace: true,
      },
    },
    messages: {
      username: {
        required: 'Login is required!',
        pattern: 'Login can only contain letters and numbers!',
      },
      name: {
        required: 'Name is required!',
      },
      surname: {
        required: 'Surname is required!',
      },
      password: {
        required: 'Password is required!',
      },
      password2: {
        required: 'Re-enter password is required!',
      },
      email: {
        required: 'Email is required!',
        email: 'Invalid email address!',
      },
    },
  });
});
