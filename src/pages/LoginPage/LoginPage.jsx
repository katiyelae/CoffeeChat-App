import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div class="center-vertically">
      <h2>Welcome to CoffeeChat</h2>
      <form >
        <label>
          Email:
          <br />
          <input type='email' placeholder='Enter your email' />
        </label>
        <br />
        <br />
        <label>
          Password:
          <br />
          <input type='password' />
        </label>
        <br />
        <br />
        <label>
          <input type='checkbox' /> Remember me?
        </label>
        <br />
        <br />
        <button type='submit'>Login</button>
        <br />
        <br />
        <a class="center-vertically" href='needToFill'>Forgot Password?</a>
        <br />
        <div class="center-vertically">Or continue with</div>
        <div class="two-column">
        <button class="narrow-button" type='button'>Google</button>
        <button class="narrow-button" type='button'>LinkedIn</button>
        </div>
        <br />
        <div class="center-vertically">
        <a href='needToFill'>Don't have an account?</a>
        <a href='needToFill'>Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
