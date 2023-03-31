export default function Login() {
    return (
        <div className="login-page">
            <form>
                <div className="input-field">
                    <input className="c-input" type="text" name="username" value="" placeholder=" " />
                    <label className="placeholder">Username</label>
                </div>
                <div className="input-field">
                    <input className="c-input" type="email" name="email" value="" placeholder=" " />
                    <label className="placeholder">Email</label>
                </div>
                <div className="input-field">
                    <input className="c-input" type="password" name="password" value="" placeholder=" " />
                    <label className="placeholder">Password</label>
                </div>
                <button className="btn-primary" type="submit">
                    Submit
                </button>
            </form>
            <div>Don't have an account? Sign up</div>
        </div>
    );
}
