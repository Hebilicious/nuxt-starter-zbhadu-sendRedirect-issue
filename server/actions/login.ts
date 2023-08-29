export default defineFormActions({
  default: async (event) => {
    console.log('Login called !');

    const formData = await readFormData(event);
    const email = formData.get('email');
    const password = formData.get('password');

    console.log('email', email);
    console.log('password', password);

    if (!email)
      return actionResponse(
        event,
        { email, missing: true },
        { error: { message: 'Missing email' } }
      );

    const user = {
      id: new Date().getTime(),
      email,
    };

    return actionResponse(event, { user }, { redirect: '/todos' });
  },
  _register: () => {
    console.log('Register called !');
  },
});
