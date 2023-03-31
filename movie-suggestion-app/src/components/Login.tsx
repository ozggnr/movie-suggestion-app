export default function Login() {
    return (
        <form>
            <label>Username</label>
            <input type="text" name="username" value="ozge" />
            <label>Email</label>
            <input type="email" name="email" value="" />
            <label>Password</label>
            <input type="password" name="password" value="" />
            <button type="submit">Submit</button>
        </form>
    );
}
