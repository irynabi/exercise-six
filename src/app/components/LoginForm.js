import styles from "./components.module.css"

const LoginForm = () => {
    return (
        <div>
            <h2>Login Form</h2>           
            <form className={styles.Form}>
                <label htmlFor="name"> Name </label>
                <input type="text" name="name"/>

                <label htmlFor="email"> Email </label>
                <input type="email" name="email"/>

                <label htmlFor="password"> Password</label>
                <input type="password" name="password"/>

                <button type="submit"> Login </button>
            </form>
        </div>
    )
}

export default LoginForm;